"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLead } from "@/components/lead/LeadProvider";

interface LeadButtonProps {
  /** Recorded with the lead so the sheet shows which page converted. */
  source: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

/** Opens the enquiry popup. Lets server-rendered pages carry a CTA button. */
export default function LeadButton({
  source,
  children,
  variant = "primary",
  className,
}: LeadButtonProps) {
  const { openLead } = useLead();
  return (
    <button
      onClick={() => openLead(source)}
      className={cn(
        "btn group",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
