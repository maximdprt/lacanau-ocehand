import type { Metadata } from "next";

import { SectionTitle } from "@/components/common/section-title";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Les Salles",
  description: "Salles d'entrainement et lieux de match de Lacanau Ocehand.",
  path: "/le-club/salles",
});

export default function SallesPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Le Club"
        title="Les Salles"
        description="Infrastructures indoor et zones sable, avec integration Google Maps."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-white/15">
          <iframe
            title="19 Av Albert Francois Lacanau"
            src="https://www.google.com/maps?q=19+Av+Albert+Francois,+33680+Lacanau&output=embed"
            className="h-[320px] w-full"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-white/15">
          <iframe
            title="1 allee du college Lacanau"
            src="https://www.google.com/maps?q=1+allee+du+college,+33680+Lacanau&output=embed"
            className="h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
