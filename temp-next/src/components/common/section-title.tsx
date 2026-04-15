import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ocean">
          <span className="inline-block h-[2px] w-6 rounded bg-ocean" />
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-3xl uppercase leading-tight tracking-wide text-slate-900 sm:text-4xl md:text-5xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className={cn("text-slate-500 sm:text-base", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
