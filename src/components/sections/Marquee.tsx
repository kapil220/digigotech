"use client";

const items = [
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "React",
  "Flutter",
  "AWS",
  "GraphQL",
  "Tailwind",
  "Three.js",
  "Stripe",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {items.map((item) => (
        <span
          key={item}
          className="font-display text-2xl font-semibold text-muted/60 sm:text-3xl"
        >
          {item}
          <span className="ml-12 text-cyan/40">/</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-base py-10"
      aria-label="Technologies we use"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-base to-transparent" />

      <div
        aria-hidden="true"
        className="flex w-max [animation:dgt-marquee_40s_linear_infinite] motion-reduce:[animation:none]"
      >
        <Row />
        <Row />
        <Row />
      </div>
    </section>
  );
}
