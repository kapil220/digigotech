import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import ProseSections from "@/components/ui/ProseSections";
import { formatDate } from "@/content/blog";
import { legalUpdated, termsSections } from "@/content/legal";

const title = "Terms of Use";
const description =
  "Terms that apply to your use of the Nexopsdev Technologies website.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/terms",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: title, path: "/terms" },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero crumbs={crumbs} eyebrow="Legal" title={title}>
        <p className="text-sm text-muted">
          Last updated{" "}
          <time dateTime={legalUpdated}>{formatDate(legalUpdated)}</time>
        </p>
      </PageHero>

      <section className="bg-paper py-16 sm:py-24">
        <div className="shell">
          <div className="max-w-[68ch]">
            <ProseSections sections={termsSections} />
          </div>
        </div>
      </section>
    </main>
  );
}
