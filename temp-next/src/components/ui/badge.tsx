import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "ocean" | "success" | "muted";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]",
        variant === "default" && "bg-ocean/10 text-ocean",
        variant === "ocean" && "bg-ocean text-white",
        variant === "success" && "bg-emerald-100 text-emerald-700",
        variant === "muted" && "bg-slate-100 text-slate-500",
        className,
      )}
      {...props}
    />
  );
}
