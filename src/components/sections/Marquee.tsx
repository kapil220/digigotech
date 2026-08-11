"use client";

const items = [
  "Claude",
  "OpenAI",
  "LangGraph",
  "Next.js",
  "React Native",
  "TypeScript",
  "n8n",
  "Node.js",
  "PostgreSQL",
  "pgvector",
  "Flutter",
  "AWS",
  "Twilio",
  "Stripe",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center font-display text-[1.6rem] text-faint sm:text-4xl"
        >
          <span className="px-8 sm:px-10">{item}</span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/45"
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-canvas py-8 sm:py-11"
      aria-label="Technologies we use"
    >
      <h2 className="sr-only">Technologies we work with</h2>

      {/* Edge fades so the band reads as continuous rather than clipped. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent sm:w-40" />

      <div
        aria-hidden="true"
        className="flex w-max [animation:dgt-marquee_46s_linear_infinite] motion-reduce:[animation:none]"
      >
        <Row />
        <Row />
        <Row />
      </div>
    </section>
  );
}
