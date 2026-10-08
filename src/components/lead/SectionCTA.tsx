"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useLead } from "@/components/lead/LeadProvider";

interface SectionCTAProps {
  title: string;
  copy: string;
  label: string;
  /** Recorded with the lead so the sheet shows which section converted. */
  source: string;
}

/** Closing row for a section: one line of pitch, one button to the form. */
export default function SectionCTA({
  title,
  copy,
  label,
  source,
}: SectionCTAProps) {
  const { openLead } = useLead();
  return (
    <Reveal>
      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:mt-20 sm:flex-row sm:items-center">
        <div>
          <p className="font-display type-h3 text-ink">{title}</p>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
            {copy}
          </p>
        </div>
        <button
          onClick={() => openLead(source)}
          className="btn btn-primary group shrink-0"
        >
          {label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </Reveal>
  );
}
