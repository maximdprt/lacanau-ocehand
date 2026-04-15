import type { Metadata } from "next";

import { SectionTitle } from "@/components/common/section-title";
import { Timeline } from "@/components/sections/timeline";
import { timelineEvents } from "@/data/site";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Histoire et Palmares",
  description: "Timeline interactive du club et des titres de Lacanau Ocehand.",
  path: "/le-club/histoire-palmares",
});

export default function HistoirePalmaresPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Le Club"
        title="Histoire et Palmares"
        description="Du lancement du handball lacanau jusqu'aux finales nationales."
      />
      <Timeline events={timelineEvents} />
    </div>
  );
}
