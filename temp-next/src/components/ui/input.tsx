import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-ocean/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean/20",
        className,
      )}
      {...props}
    />
  );
}
