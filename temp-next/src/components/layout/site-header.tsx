"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { beachXperienceUrl, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isOpaque = !isHome || scrolled;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-all duration-300",
        isHome ? "fixed" : "sticky",
        isOpaque
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg"
          : "border-b border-white/0 bg-white/70 backdrop-blur-lg",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85">
          <Image
            src="/placeholders/logo-main.png"
            alt="Logo Lacanau Ocehand"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-xl uppercase tracking-wider text-slate-900 sm:text-2xl">
            Lacanau Ocehand
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                pathname === item.href
                  ? "bg-ocean/10 text-ocean"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={beachXperienceUrl} target="_blank" rel="noreferrer" className="ml-2">
            <Button size="sm" className="rounded-full px-5 text-xs font-semibold uppercase tracking-wider">
              Beach Xperience
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                pathname === item.href
                  ? "bg-ocean/10 text-ocean"
                  : "text-slate-700 hover:bg-slate-50",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={beachXperienceUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-ocean px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-ocean/90"
          >
            Lacanau Beach Handball Xperience
          </a>
        </div>
      </div>
    </header>
  );
}
