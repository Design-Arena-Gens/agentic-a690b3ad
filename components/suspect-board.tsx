"use client";

import Image from "next/image";
import { suspects } from "@/lib/case-data";
import { motion } from "framer-motion";
import { LucideFingerprint, LucideLink, LucideUser } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, x: 40 },
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export function SuspectBoard() {
  return (
    <section className="rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,105,0,0.12),_transparent_55%)] from-slate-900/80 to-slate-950/90 px-10 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Persons of Interest
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Profiles cross-referenced with Meridian Veil dossiers. High probability operatives orchestrating symbolic staging.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3rem] text-white/70 backdrop-blur">
          <LucideFingerprint size={16} className="text-amber-400" />
          Lattice Index Correlation: 0.82
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {suspects.map((suspect, index) => (
          <motion.article
            key={suspect.name}
            className="panel-with-ring glass-panel relative flex flex-col gap-5 rounded-3xl p-6"
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={index}
          >
            <span className="glow-ring" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={suspect.photo}
                alt={suspect.name}
                width={420}
                height={280}
                className="h-48 w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-4">
                <span className="text-xs uppercase tracking-[0.3rem] text-amber-400">
                  Active Surveillance
                </span>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <LucideUser size={16} />
                  <span>{suspect.role}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{suspect.name}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{suspect.narrative}</p>
            <div className="space-y-2">
              {suspect.links.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70"
                >
                  <LucideLink size={14} className="text-amber-300" />
                  <span className="uppercase tracking-[0.2rem] text-white/50">{link.label}</span>
                  <span className="flex-1 text-right font-medium text-white/80">{link.value}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
