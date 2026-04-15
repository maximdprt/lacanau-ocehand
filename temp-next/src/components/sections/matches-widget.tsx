import { CalendarDays, MapPin } from "lucide-react";

import type { MatchItem } from "@/types";

function Score({ score }: { score: string }) {
  const parts = score.split("-").map((s) => s.trim());
  if (parts.length !== 2) return <span className="text-sm font-bold text-ocean">{score}</span>;
  return (
    <span className="inline-flex items-center gap-1 font-display text-2xl uppercase tracking-wide text-ocean">
      {parts[0]}
      <span className="text-sm font-normal text-slate-400">-</span>
      {parts[1]}
    </span>
  );
}

function TeamRow({ name, isHome }: { name: string; isHome: boolean }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  const isLacanau = name.toLowerCase().includes("lacanau");

  return (
    <div className={`flex items-center gap-3 ${isHome ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          isLacanau
            ? "bg-ocean text-white"
            : "border border-slate-200 bg-slate-100 text-slate-600"
        }`}
      >
        {initials || "HB"}
      </div>
      <span
        className={`text-sm font-semibold ${isLacanau ? "text-ocean" : "text-slate-800"} ${isHome ? "" : "text-right"}`}
      >
        {name}
      </span>
    </div>
  );
}

export function MatchList({
  title,
  matches,
  isResults = false,
}: {
  title: string;
  matches: MatchItem[];
  isResults?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
        <h3 className="font-display text-2xl uppercase tracking-wide text-slate-900">{title}</h3>
        <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ocean">
          {matches.length} match{matches.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Match rows */}
      <div className="divide-y divide-slate-100">
        {matches.map((match) => {
          const homeTeam = match.isHome ? "Lacanau Ocehand" : match.opponent;
          const awayTeam = match.isHome ? match.opponent : "Lacanau Ocehand";

          return (
            <div key={match.id} className="group">
              {/* Compétition header */}
              <div className="border-b border-slate-100 bg-gradient-to-r from-ocean/5 to-transparent px-5 py-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ocean">
                  {match.competition}
                </p>
              </div>

              {/* Match body */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 transition-colors group-hover:bg-slate-50/70">
                {/* Equipe domicile */}
                <TeamRow name={homeTeam} isHome />

                {/* Séparateur central */}
                <div className="flex flex-col items-center gap-1 px-2">
                  {isResults && match.score ? (
                    <Score score={match.score} />
                  ) : (
                    <span className="font-display text-lg uppercase tracking-wider text-slate-300">vs</span>
                  )}
                  <div className="flex items-center gap-1 text-slate-400">
                    <CalendarDays size={11} />
                    <span className="whitespace-nowrap text-[11px] font-medium">{match.date}</span>
                  </div>
                  {match.location && (
                    <div className="flex items-center gap-1 text-slate-400">
                      <MapPin size={10} />
                      <span className="max-w-[110px] truncate text-[10px]">{match.location}</span>
                    </div>
                  )}
                </div>

                {/* Equipe extérieure */}
                <TeamRow name={awayTeam} isHome={false} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
