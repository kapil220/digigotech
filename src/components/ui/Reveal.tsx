"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentType, ReactNode } from "react";

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
  // motion[as] is a union of component types; cast to a single permissive
  // component so the shared motion props typecheck cleanly.
  const MotionTag = motion[as] as ComponentType<Record<string, unknown>>;
  return (
    <MotionTag
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
