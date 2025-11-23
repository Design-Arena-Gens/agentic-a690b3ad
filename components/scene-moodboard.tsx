"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LucideCamera, LucideFlame } from "lucide-react";

const frames = [
  {
    src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80",
    caption: "Entry point sealed from inside. Residual cedar resin visible."
  },
  {
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1000&q=80",
    caption: "Thermal scan identifying cold zones arranged in ritual circle."
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    caption: "Overwatch drone capture of pier perimeter five minutes post alarm."
  }
];

export function SceneMoodboard() {
  return (
    <section className="glass-panel panel-with-ring relative overflow-hidden rounded-3xl px-10 py-12">
      <span className="glow-ring" aria-hidden />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Scene Moodboard
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Visual extractions from crime lab textures folder: lighting conditions, heat residue, and staging artifacts.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3rem] text-white/70">
          <LucideCamera size={16} className="text-amber-400" />
          Exposure Batch #17
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {frames.map((frame, index) => (
          <motion.figure
            key={frame.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
            <Image
              src={frame.src}
              alt={frame.caption}
              width={420}
              height={320}
              className="h-56 w-full object-cover"
            />
            <figcaption className="relative z-20 flex items-center gap-3 px-5 py-4 text-sm text-white/70">
              <LucideFlame className="h-4 w-4 text-amber-300" />
              {frame.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
