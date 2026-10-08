import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import ProseSections from "@/components/ui/ProseSections";
import { formatDate } from "@/content/blog";
import { legalUpdated, privacySections } from "@/content/legal";

const title = "Privacy Policy";
const description =
  "How Nexopsdev Technologies collects, uses and protects the personal information you send through this website.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/privacy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: title, path: "/privacy" },
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
            <ProseSections sections={privacySections} />
          </div>
        </div>
      </section>
    </main>
  );
}
