import { caseSummary } from "@/lib/case-data";
import { Spotlight } from "@/components/spotlight";
import { cn } from "@/lib/utils";

export function CaseHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/70 via-slate-950/90 to-black/90 px-10 py-16 shadow-2xl">
      <Spotlight />
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-widest text-white/80 backdrop-blur">
          <span className="font-semibold text-amber-400">{caseSummary.designation}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>{caseSummary.assignedUnit}</span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr]">
          <div className="space-y-6">
            <h1
              className={cn(
                "font-title text-4xl uppercase tracking-[0.6rem] text-white drop-shadow-[0_10px_30px_rgba(255,100,0,0.35)] md:text-5xl",
                "relative"
              )}
            >
              {caseSummary.title}
              <span className="absolute -bottom-3 left-0 h-[3px] w-32 bg-gradient-to-r from-amber-500 via-orange-400 to-transparent" />
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/70">
              {caseSummary.description}
            </p>
          </div>
          <div className="glass-panel panel-with-ring relative overflow-hidden rounded-2xl p-6">
            <span className="glow-ring" aria-hidden />
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
            <h2 className="font-title text-sm tracking-[0.4rem] text-amber-400">LEAD</h2>
            <p className="mt-4 text-2xl font-semibold text-white">{caseSummary.leadDetective}</p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                <span>Clearance Level</span>
                <span className="font-semibold text-amber-300">OMEGA-13</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                <span>Last Update</span>
                <span className="font-semibold text-white">5h ago</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                <span>Signal Integrity</span>
                <span className="font-semibold text-emerald-300">STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
