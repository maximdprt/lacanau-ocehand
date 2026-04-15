import { CalendarDays, MapPin } from "lucide-react";

import type { MatchItem } from "@/types";

function Score({ score }: { score: string }) {
  const parts = score.split("-").map((s) => s.trim());
  if (parts.length !== 2) return <span className="text-sm font-bold text-ocean">{score}</span>;
  return (
    <span className="inline-flex items-center gap-1 font-display text-xl uppercase tracking-wide text-ocean sm:text-2xl">
      {parts[0]}
      <span className="text-xs font-normal text-slate-400 sm:text-sm">-</span>
      {parts[1]}
    </span>
  );
}

function TeamRow({ name, align = "left" }: { name: string; align?: "left" | "right" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  const isLacanau = name.toLowerCase().includes("lacanau");
  const isRight = align === "right";

  return (
    <div className={`flex items-center gap-3 ${isRight ? "sm:flex-row-reverse" : ""}`}>
      <div
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold sm:h-10 sm:w-10 sm:text-xs ${
          isLacanau
            ? "bg-ocean text-white"
            : "border border-slate-200 bg-slate-100 text-slate-600"
        }`}
      >
        {initials || "HB"}
      </div>
      <span
        className={`text-sm font-semibold leading-tight ${isLacanau ? "text-ocean" : "text-slate-800"} ${
          isRight ? "sm:text-right" : ""
        }`}
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
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 sm:px-5 sm:py-4">
        <h3 className="font-display text-xl uppercase tracking-wide text-slate-900 sm:text-2xl">{title}</h3>
        <span className="rounded-full bg-ocean/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ocean sm:px-3 sm:text-xs">
          {matches.length} match{matches.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {matches.map((match) => {
          const homeTeam = match.isHome ? "Lacanau Ocehand" : match.opponent;
          const awayTeam = match.isHome ? match.opponent : "Lacanau Ocehand";

          return (
            <div key={match.id} className="group">
              <div className="border-b border-slate-100 bg-gradient-to-r from-ocean/5 to-transparent px-4 py-2 sm:px-5">
                <p className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-ocean sm:text-[11px] sm:tracking-[0.18em]">
                  {match.competition}
                </p>
              </div>

              <div className="grid grid-cols-1 items-center gap-3 px-4 py-4 transition-colors group-hover:bg-slate-50/70 sm:grid-cols-[1fr_auto_1fr] sm:gap-3 sm:px-5">
                <div className="order-2 sm:order-1">
                  <TeamRow name={homeTeam} align="left" />
                </div>

                <div className="order-1 flex flex-col items-center gap-1 px-1 sm:order-2 sm:px-2">
                  {isResults && match.score ? (
                    <Score score={match.score} />
                  ) : (
                    <span className="font-display text-base uppercase tracking-wider text-slate-300 sm:text-lg">vs</span>
                  )}
                  <div className="flex items-center gap-1 text-slate-400">
                    <CalendarDays size={11} />
                    <span className="text-[11px] font-medium text-center">{match.date}</span>
                  </div>
                  {match.location && (
                    <div className="flex items-center gap-1 text-slate-400">
                      <MapPin size={10} />
                      <span className="max-w-[180px] truncate text-[10px] sm:max-w-[110px]">{match.location}</span>
                    </div>
                  )}
                </div>

                <div className="order-3 sm:order-3">
                  <TeamRow name={awayTeam} align="right" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
