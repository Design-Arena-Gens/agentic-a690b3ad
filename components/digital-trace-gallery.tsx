import Image from "next/image";
import { digitalTrace } from "@/lib/case-data";
import { LucideCpu, LucideScan } from "lucide-react";

export function DigitalTraceGallery() {
  return (
    <section className="rounded-3xl border border-white/5 bg-slate-950/90 px-10 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Digital Trace
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Drone feeds, spectrum analysis, and spatial overlays extracted within the five-hour containment window.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3rem] text-white/70">
          <LucideCpu size={16} className="text-amber-400" />
          Quantum Scan Layer Active
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {digitalTrace.map((item) => (
          <article
            key={item.title}
            className="panel-with-ring glass-panel relative flex flex-col overflow-hidden rounded-3xl"
          >
            <span className="glow-ring" aria-hidden />
            <div className="relative h-52 w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between px-5 py-4 text-xs uppercase tracking-[0.3rem] text-white/70">
                <span>{item.title}</span>
                <div className="flex items-center gap-2 text-amber-300">
                  <LucideScan size={16} />
                  Spectral Integrity 97%
                </div>
              </div>
            </div>
            <p className="p-6 text-sm leading-relaxed text-white/70">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
