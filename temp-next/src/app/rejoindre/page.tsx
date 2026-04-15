import type { Metadata } from "next";
import { UserPlus, Building2 } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionTitle } from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Rejoindre le Club",
  description:
    "Formulaires d'inscription licencies et partenaires B2B pour rejoindre Lacanau Ocehand.",
  path: "/rejoindre",
});

export default function RejoindrePage() {
  return (
    <div className="space-y-14">
      <SectionTitle
        eyebrow="Engagement"
        title="Rejoindre le Club"
        description="Que vous souhaitiez jouer ou accompagner le projet, deux formulaires sont disponibles."
      />

      <Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Licencié */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-6 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <UserPlus size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Inscription</p>
                <h2 className="font-display text-xl uppercase tracking-wide text-slate-900">Formulaire licencie</h2>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Nom" aria-label="Nom" />
                <Input placeholder="Prenom" aria-label="Prenom" />
              </div>
              <Input placeholder="Email" type="email" aria-label="Email" />
              <Input placeholder="Telephone" type="tel" aria-label="Telephone" />
              <Input placeholder="Categorie souhaitee (ex: U11, Senior, Loisir...)" aria-label="Categorie" />
              <Textarea
                placeholder="Informations complementaires (experience, disponibilites...)"
                aria-label="Informations complementaires"
                className="min-h-[100px]"
              />
              <Button className="w-full">Envoyer la demande</Button>
            </div>
          </div>

          {/* Partenaire B2B */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-6 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <Building2 size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Partenariat</p>
                <h2 className="font-display text-xl uppercase tracking-wide text-slate-900">Formulaire partenaires</h2>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <Input placeholder="Nom de l'entreprise" aria-label="Entreprise" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Nom du contact" aria-label="Nom du contact" />
                <Input placeholder="Telephone" type="tel" aria-label="Telephone partenaire" />
              </div>
              <Input placeholder="Email professionnel" type="email" aria-label="Email professionnel" />
              <Textarea
                placeholder="Decrivez votre projet de partenariat..."
                aria-label="Objectif du partenariat"
                className="min-h-[100px]"
              />
              <Button variant="secondary" className="w-full">
                Proposer un partenariat
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
