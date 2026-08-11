import Image, { type StaticImageData } from "next/image";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import compactLight from "@/assets/logo-compact-light.png";
import compactDark from "@/assets/logo-compact-dark.png";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

/**
 * The DigiGoTech lockup — the original brand artwork, with the white plate
 * keyed out to transparency so it sits on the ivory canvas without a box.
 *
 * Two colour variants ship: the stock artwork for light, and one where the navy
 * wordmark is recoloured to ivory for dark (the reds are untouched in both).
 * Both are in the DOM and swapped with CSS, so the right one is showing on
 * first paint — no flash, no dependency on hydration.
 *
 * Two crops ship too: the compact lockup drops the
 * TECHNOLOGY. INNOVATION. GROWTH. rule, which is unreadable below ~60px, and
 * the full lockup keeps it for the footer where there's room to read it.
 */

const sizes = {
  sm: "h-8",
  md: "h-9",
  lg: "h-14",
} as const;

/** Sizes at which the tagline rule is legible enough to keep. */
const FULL_LOCKUP: ReadonlySet<keyof typeof sizes> = new Set(["lg"]);

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoMark}
      alt=""
      aria-hidden="true"
      priority
      className={cn("h-full w-auto", className)}
    />
  );
}

interface LogoProps {
  className?: string;
  size?: keyof typeof sizes;
  /** Render the "d" mark alone, without the wordmark. */
  markOnly?: boolean;
}

export default function Logo({
  className,
  size = "md",
  markOnly = false,
}: LogoProps) {
  if (markOnly) {
    return <LogoMark className={cn(sizes[size], className)} />;
  }

  const full = FULL_LOCKUP.has(size);
  const light: StaticImageData = full ? logoLight : compactLight;
  const dark: StaticImageData = full ? logoDark : compactDark;

  return (
    <span
      className={cn("relative inline-block", sizes[size], className)}
      role="img"
      aria-label="DigiGoTech"
    >
      <Image src={light} alt="" priority className="h-full w-auto dark-hidden" />
      <Image
        src={dark}
        alt=""
        priority
        className="light-hidden absolute inset-0 h-full w-auto"
      />
    </span>
  );
}
