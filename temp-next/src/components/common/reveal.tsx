"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

export function Reveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
