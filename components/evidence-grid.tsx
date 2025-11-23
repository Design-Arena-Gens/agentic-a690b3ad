"use client";

import { primaryEvidence } from "@/lib/case-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export function EvidenceGrid() {
  return (
    <section className="rounded-3xl border border-white/5 bg-slate-950/80 px-10 py-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Evidence Vault
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Primary artifacts catalogued within climate-sealed containment. Each exhibits Meridian Veil signatures requiring cross-case interpolation.
          </p>
        </div>
        <div className="rounded-full border border-emerald-400/30 px-5 py-2 text-xs uppercase tracking-[0.4rem] text-emerald-300">
          Chain of Custody: Secured
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {primaryEvidence.map((item, index) => (
          <motion.div
            key={item.label}
            className={cn(
              "glass-panel panel-with-ring relative flex flex-col gap-4 rounded-2xl p-6"
            )}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={index}
          >
            <span className="glow-ring" aria-hidden />
            <div className="flex items-center justify-between">
              <span className="font-title text-xs uppercase tracking-[0.6rem] text-white/70">
                {item.label}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3rem] text-amber-200">
                Tagged
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
