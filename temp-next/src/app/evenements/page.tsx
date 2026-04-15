import type { Metadata } from "next";

import { SectionTitle } from "@/components/common/section-title";
import { NewsGrid } from "@/components/sections/news-grid";
import { newsItems } from "@/data/site";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Evenements",
  description:
    "Evenements du club: vie associative, resultats, annonces et rendez-vous beach handball lacanau.",
  path: "/evenements",
});

export default function EvenementsPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Vie du club"
        title="Evenements"
        description="Retrouve les rendez-vous importants, annonces et temps forts de la saison."
      />
      <NewsGrid items={newsItems} />
    </div>
  );
}
