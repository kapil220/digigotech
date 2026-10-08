import Image, { type StaticImageData } from "next/image";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import compactLight from "@/assets/logo-compact-light.png";
import compactDark from "@/assets/logo-compact-dark.png";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

/**
 * The Nexopsdev Technologies lockup — official brand artwork.
 *
 * Two colour variants ship: light theme artwork and dark theme artwork.
 * Both are in the DOM and swapped with CSS, so the right one is showing on
 * first paint — no flash, no dependency on hydration.
 */

const sizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
} as const;

/** Sizes at which the full lockup is used. */
const FULL_LOCKUP: ReadonlySet<keyof typeof sizes> = new Set(["lg"]);

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoMark}
      alt="Nexopsdev Technologies mark"
      aria-hidden="true"
      priority
      className={cn("h-full w-auto object-contain", className)}
    />
  );
}

interface LogoProps {
  className?: string;
  size?: keyof typeof sizes;
  /** Render the mark alone, without the wordmark. */
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
      aria-label="Nexopsdev Technologies"
    >
      <Image src={light} alt="Nexopsdev Technologies" priority className="h-full w-auto object-contain dark-hidden" />
      <Image
        src={dark}
        alt="Nexopsdev Technologies"
        priority
        className="light-hidden absolute inset-0 h-full w-auto object-contain"
      />
    </span>
  );
}
