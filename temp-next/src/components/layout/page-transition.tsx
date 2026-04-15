"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src="/placeholders/logo-main.png"
            alt="Logo Lacanau Ocehand"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
