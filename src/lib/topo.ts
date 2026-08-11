/**
 * Deterministic topographic line art.
 *
 * Everything here is a pure function of an integer seed, so the paths generated
 * on the server match the client byte-for-byte — no hydration mismatch, no
 * `Math.random()` anywhere. The output is plain SVG path data that callers drop
 * into a `<path d="…">`.
 *
 * Two families:
 *  - `contourField`  nested closed loops sharing one noise field, i.e. the
 *                    concentric rings of a hill on an ordnance-survey map.
 *  - `ridgeField`    stacked open elevation profiles, i.e. a cross-section.
 */

type Point = readonly [number, number];

/** Small deterministic PRNG (mulberry32) so a seed fully describes a field. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Harmonic {
  /** Angular frequency — how many lobes this term contributes. */
  k: number;
  /** Displacement as a fraction of the ring radius. */
  amp: number;
  phase: number;
}

function harmonics(seed: number, count: number): Harmonic[] {
  const rand = rng(seed);
  return Array.from({ length: count }, (_, i) => ({
    k: i + 2,
    // Higher frequencies contribute less, keeping the silhouette readable.
    amp: (0.14 / (i + 1)) * (0.55 + rand() * 0.9),
    phase: rand() * Math.PI * 2,
  }));
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/**
 * Closed Catmull-Rom spline through `pts`, emitted as cubic Béziers. Far fewer
 * sample points than a polyline needs for the same smoothness, which keeps the
 * inlined SVG small.
 */
function closedSpline(pts: Point[]): string {
  const n = pts.length;
  const at = (i: number) => pts[((i % n) + n) % n];
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const [x0, y0] = at(i - 1);
    const [x1, y1] = at(i);
    const [x2, y2] = at(i + 1);
    const [x3, y3] = at(i + 2);
    const c1x = x1 + (x2 - x0) / 6;
    const c1y = y1 + (y2 - y0) / 6;
    const c2x = x2 - (x3 - x1) / 6;
    const c2y = y2 - (y3 - y1) / 6;
    d += `C${r1(c1x)} ${r1(c1y)} ${r1(c2x)} ${r1(c2y)} ${r1(x2)} ${r1(y2)}`;
  }
  return `${d}Z`;
}

/** Open Catmull-Rom spline — used for ridge profiles, which don't wrap. */
function openSpline(pts: Point[]): string {
  const n = pts.length;
  const at = (i: number) => pts[Math.min(Math.max(i, 0), n - 1)];
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < n - 1; i++) {
    const [x0, y0] = at(i - 1);
    const [x1, y1] = at(i);
    const [x2, y2] = at(i + 1);
    const [x3, y3] = at(i + 2);
    d += `C${r1(x1 + (x2 - x0) / 6)} ${r1(y1 + (y2 - y0) / 6)} ${r1(
      x2 - (x3 - x1) / 6
    )} ${r1(y2 - (y3 - y1) / 6)} ${r1(x2)} ${r1(y2)}`;
  }
  return d;
}

export interface ContourFieldOptions {
  seed?: number;
  /** Number of nested contour lines. */
  rings?: number;
  /** Radius of the innermost ring, in viewBox units. */
  innerRadius?: number;
  /** Radius of the outermost ring, in viewBox units. */
  outerRadius?: number;
  /** Centre of the field, in viewBox units. */
  center?: Point;
  /** Sample points per ring — higher is smoother and heavier. */
  samples?: number;
  /** Overall deformation strength. 0 gives perfect circles. */
  distortion?: number;
}

/**
 * Concentric deformed rings sharing one harmonic field, so the contours nest
 * the way real elevation lines do instead of reading as unrelated blobs.
 */
export function contourField({
  seed = 7,
  rings = 12,
  innerRadius = 90,
  outerRadius = 470,
  center = [500, 500],
  samples = 44,
  distortion = 1,
}: ContourFieldOptions = {}): string[] {
  const field = harmonics(seed, 5);
  const [cx, cy] = center;
  const step = rings > 1 ? (outerRadius - innerRadius) / (rings - 1) : 0;

  return Array.from({ length: rings }, (_, ring) => {
    const radius = innerRadius + step * ring;
    // Inner rings deform less — hilltops are rounder than their foothills.
    const strength = distortion * (0.35 + (ring / Math.max(rings - 1, 1)) * 0.9);

    const pts: Point[] = Array.from({ length: samples }, (_, i) => {
      const theta = (i / samples) * Math.PI * 2;
      let offset = 0;
      for (const h of field) offset += h.amp * Math.sin(h.k * theta + h.phase);
      const r = radius * (1 + offset * strength);
      return [cx + Math.cos(theta) * r, cy + Math.sin(theta) * r * 0.86];
    });

    return closedSpline(pts);
  });
}

export interface RidgeFieldOptions {
  seed?: number;
  /** Number of stacked profile lines. */
  lines?: number;
  width?: number;
  height?: number;
  samples?: number;
  /** Peak-to-trough travel of the topmost profile, in viewBox units. */
  amplitude?: number;
}

/**
 * Stacked elevation profiles that march down the canvas — a cross-section
 * rather than a plan view. Reads well as a wide, short band.
 */
export function ridgeField({
  seed = 21,
  lines = 9,
  width = 1200,
  height = 320,
  samples = 34,
  amplitude = 46,
}: RidgeFieldOptions = {}): string[] {
  const field = harmonics(seed, 4);
  const gap = height / (lines + 1);

  return Array.from({ length: lines }, (_, line) => {
    // Each successive line shifts phase slightly, so the ridges appear to
    // recede rather than sit as parallel copies.
    const drift = line * 0.42;
    const decay = 1 - line / (lines + 2);

    const pts: Point[] = Array.from({ length: samples }, (_, i) => {
      const t = i / (samples - 1);
      let offset = 0;
      for (const h of field) {
        offset += h.amp * Math.sin(h.k * t * Math.PI * 2 + h.phase + drift);
      }
      const y = gap * (line + 1) + offset * amplitude * decay * 4;
      return [t * width, y];
    });

    return openSpline(pts);
  });
}
