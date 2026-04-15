import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-ocean text-white shadow-sm hover:bg-ocean/90 hover:shadow-ocean active:scale-[0.98]",
        outline:
          "rounded-full border border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/15 active:scale-[0.98]",
        ghost:
          "rounded-full text-white hover:bg-white/12 active:scale-[0.98]",
        light:
          "rounded-full bg-white text-slate-900 shadow-sm hover:bg-slate-50 active:scale-[0.98]",
        secondary:
          "rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
