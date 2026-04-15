type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 md:px-12 md:py-20">
      {/* Fond radial bleu */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(10,94,168,0.40),_transparent_65%)]" />
      {/* Grille décorative subtile */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative space-y-4">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ocean-light">
            <span className="inline-block h-[2px] w-5 rounded bg-ocean-light" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl uppercase leading-[0.9] tracking-wide text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
