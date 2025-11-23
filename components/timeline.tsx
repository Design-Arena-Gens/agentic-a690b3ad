"use client";

import { timelineEvents } from "@/lib/case-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export function Timeline() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/80 p-10">
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Chronology
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/70">
            Anchor points reconstructing the operation window from initial surge to field containment.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-sm uppercase tracking-[0.3rem] text-emerald-200/60">
            Timestamp Integrity: Verified
          </p>
        </div>
      </div>
      <ol className="mt-8 space-y-6 border-l border-dashed border-white/10 pl-8">
        {timelineEvents.map((event, index) => (
          <motion.li
            key={event.time}
            className="relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={index}
          >
            <span
              className={cn(
                "absolute -left-[42px] top-2 flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/70 bg-slate-900 shadow-glow"
              )}
            >
              <span className="h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <div className="glass-panel panel-with-ring relative rounded-2xl p-6">
              <span className="glow-ring" aria-hidden />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.4rem] text-amber-300">
                  {event.time}
                </span>
                <h3 className="font-semibold text-lg text-white">{event.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{event.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
