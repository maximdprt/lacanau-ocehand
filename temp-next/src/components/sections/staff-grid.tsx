"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { staffMembers } from "@/data/site";
import type { StaffMember } from "@/types";

const poles: Array<StaffMember["pole"] | "Tous"> = [
  "Tous",
  "Direction",
  "Sportif",
  "Medical",
  "Communication",
];

export function StaffGrid() {
  const [activePole, setActivePole] = useState<(typeof poles)[number]>("Tous");

  const filtered = useMemo(() => {
    if (activePole === "Tous") return staffMembers;
    return staffMembers.filter((member) => member.pole === activePole);
  }, [activePole]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {poles.map((pole) => (
          <button
            key={pole}
            onClick={() => setActivePole(pole)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
              activePole === pole
                ? "border-ocean bg-ocean/15 text-ocean"
                : "border-slate-300 bg-white text-slate-600"
            }`}
          >
            {pole}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((member) => (
          <Card key={member.id}>
            <CardContent>
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 font-display text-2xl uppercase text-slate-900">{member.name}</p>
              <p className="text-sm text-ocean">{member.role}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">{member.pole}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
