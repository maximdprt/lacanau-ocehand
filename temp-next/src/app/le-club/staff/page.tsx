import type { Metadata } from "next";

import { SectionTitle } from "@/components/common/section-title";
import { StaffGrid } from "@/components/sections/staff-grid";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Le Staff",
  description: "Encadrement sportif, medical et direction du club Lacanau Ocehand.",
  path: "/le-club/staff",
});

export default function StaffPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Le Club"
        title="Le Staff"
        description="Grille filtrable des profils qui pilotent le projet sportif du club."
      />
      <StaffGrid />
    </div>
  );
}
