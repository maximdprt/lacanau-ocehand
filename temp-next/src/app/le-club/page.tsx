import type { Metadata } from "next";

import { Reveal } from "@/components/common/reveal";
import { SectionTitle } from "@/components/common/section-title";
import { GalleryLightbox } from "@/components/sections/gallery-lightbox";
import { PageHero } from "@/components/sections/page-hero";
import { StaffGrid } from "@/components/sections/staff-grid";
import { Timeline } from "@/components/sections/timeline";
import { galleryItems, timelineEvents } from "@/data/site";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Le Club",
  description: "Histoire, staff, infrastructures et palmares de Lacanau Ocehand.",
  path: "/le-club",
});

export default function LeClubPage() {
  return (
    <div className="space-y-20">
      <PageHero
        eyebrow="Institution"
        title="Le Club"
        description="Decouvrez l'ADN de Lacanau Ocehand, de sa creation en 2017 a son titre de Champions de France 2024."
      />

      {/* Histoire & Palmarès */}
      <Reveal>
        <section className="space-y-8">
          <SectionTitle
            eyebrow="Histoire et palmares"
            title="Un projet sportif en croissance"
            description="De la creation du club a la conquete de la Coupe de France, l'aventure Ocehand en images."
          />
          <Timeline events={timelineEvents} />
        </section>
      </Reveal>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Staff */}
      <Reveal>
        <section className="space-y-8">
          <SectionTitle
            eyebrow="Le staff"
            title="Encadrement"
            description="Equipe dirigeante, encadrement sportif et pole communication."
          />
          <StaffGrid />
        </section>
      </Reveal>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Salles */}
      <Reveal>
        <section className="space-y-8">
          <SectionTitle
            eyebrow="Les salles"
            title="Lieux d&apos;entrainement"
            description="Deux points d'activite principaux du club sur la commune de Lacanau."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <p className="border-b border-slate-100 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Gymnase — 19 Av Albert Francois, 33680 Lacanau
              </p>
              <iframe
                title="19 Av Albert Francois Lacanau"
                src="https://www.google.com/maps?q=19+Av+Albert+Francois,+33680+Lacanau&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <p className="border-b border-slate-100 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Salle du College — 1er All. du College, 33680 Lacanau
              </p>
              <iframe
                title="1 allee du college Lacanau"
                src="https://www.google.com/maps?q=1+allee+du+college,+33680+Lacanau&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Galerie Coupe de France */}
      <Reveal>
        <section className="space-y-8">
          <SectionTitle
            eyebrow="Coupe de France 2024"
            title="L&apos;epopee de Bercy"
            description="Retour en images et en emotions sur le parcours historique du club vers le titre national."
          />
          <GalleryLightbox items={galleryItems} />
        </section>
      </Reveal>
    </div>
  );
}
