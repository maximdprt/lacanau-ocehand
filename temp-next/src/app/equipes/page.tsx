import type { Metadata } from "next";
import { Mail, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionTitle } from "@/components/common/section-title";
import { PageHero } from "@/components/sections/page-hero";
import { TeamCard } from "@/components/sections/team-card";
import { teamSignupEmail, teams } from "@/data/site";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Nos Equipes",
  description: "Les 9 equipes de Lacanau Ocehand: competition, formation, jeunes et beach elite.",
  path: "/equipes",
});

export default function EquipesPage() {
  return (
    <div className="space-y-14">
      <PageHero
        eyebrow="Sportif"
        title="Nos Equipes"
        description="9 collectifs representent le club en indoor et beach handball, de la M7 aux seniors elite."
      />

      <Reveal>
        <section className="space-y-8">
          <SectionTitle
            eyebrow="Collectifs"
            title="Toutes les categories"
            description="Chaque equipe a sa page dediee avec coach, calendrier et informations."
          />

          {/* Banner inscription */}
          <div className="flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl border border-ocean/25 bg-gradient-to-br from-ocean/8 to-ocean/3 p-6 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ocean">Inscription</p>
              <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-slate-900">
                S&apos;inscrire dans une equipe
              </h3>
              <p className="mt-1 max-w-md text-sm text-slate-600">
                Contactez-nous par email pour rejoindre l&apos;equipe de votre choix. Une adresse
                definitive sera configuree prochainement.
              </p>
            </div>
            <a
              href={`mailto:${teamSignupEmail}?subject=Inscription%20equipe%20Lacanau%20Ocehand`}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean/90"
            >
              <Mail size={15} />
              Envoyer une demande
              <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teams.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
