import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-display text-7xl text-ocean-light">404</p>
      <h1 className="font-display text-4xl uppercase text-white">Page introuvable</h1>
      <p className="max-w-lg text-white/70">
        Cette page n&apos;existe pas encore. Retourne sur l&apos;accueil pour continuer la visite.
      </p>
      <Link href="/">
        <Button>Retour accueil</Button>
      </Link>
    </div>
  );
}
