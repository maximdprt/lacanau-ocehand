import type { Metadata } from "next";
import { Euro, Clock } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionTitle } from "@/components/common/section-title";
import { SeasonCalendar } from "@/components/sections/season-calendar";
import { buildMetadata } from "@/lib/site";
import { licensePricing, trainingSlots, upcomingMatches } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Saison 24-25",
  description:
    "Calendrier interactif, resultats, tarifs licences et horaires d'entrainement Lacanau Ocehand.",
  path: "/saison",
});

export default function SaisonPage() {
  return (
    <div className="space-y-14">
      <SectionTitle
        eyebrow="Saison 24-25"
        title="Calendrier &amp; infos pratiques"
        description="Calendrier des rencontres, tarifs licences et horaires d'entrainements."
      />

      <Reveal>
        <SeasonCalendar matches={upcomingMatches} />
      </Reveal>

      <Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tarifs */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-6 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <Euro size={16} />
              </div>
              <h2 className="font-display text-xl uppercase tracking-wide text-slate-900">Tarifs licences</h2>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="pb-3 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Categorie
                    </th>
                    <th className="pb-3 text-right text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {licensePricing.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "" : "bg-slate-50/50"}>
                      <td className="py-3 text-sm font-medium text-slate-800">{row.category}</td>
                      <td className="py-3 text-right">
                        <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-bold text-ocean">
                          {row.fee}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Horaires */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-6 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <Clock size={16} />
              </div>
              <h2 className="font-display text-xl uppercase tracking-wide text-slate-900">Horaires entrainements</h2>
            </div>
            <div className="space-y-2.5 p-6">
              {trainingSlots.map((slot) => (
                <div
                  key={slot.team}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-ocean/20 hover:bg-ocean/5"
                >
                  <p className="text-sm font-semibold text-slate-900">{slot.team}</p>
                  <p className="text-xs font-medium text-slate-500">{slot.schedule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
