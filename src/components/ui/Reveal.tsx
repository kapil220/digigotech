"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

interface RevealProps {
  children: ReactNode;
  /** Stagger index — multiplies the entrance delay. */
  index?: number;
  className?: string;
  as?: "div" | "li" | "span" | "section";
}

/**
 * Rises + fades its children in on first scroll into view. Honours
 * prefers-reduced-motion automatically via Framer Motion's reducedMotion.
 */
export default function Reveal({
  children,
  index = 0,
  className,
  as = "div",
}: RevealProps) {
  const commonProps = {
    className,
    custom: index,
    variants,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "0px 0px -12% 0px" },
  };

  if (as === "li") return <motion.li {...commonProps}>{children}</motion.li>;
  if (as === "span") return <motion.span {...commonProps}>{children}</motion.span>;
  if (as === "section") return <motion.section {...commonProps}>{children}</motion.section>;
  return <motion.div {...commonProps}>{children}</motion.div>;
}
