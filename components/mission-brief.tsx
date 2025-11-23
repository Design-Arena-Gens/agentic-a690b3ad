import { missionLog } from "@/lib/case-data";
import { LucideTarget, LucideTimer } from "lucide-react";

export function MissionBrief() {
  return (
    <section className="panel-with-ring glass-panel relative overflow-hidden rounded-3xl px-10 py-12">
      <span className="glow-ring" aria-hidden />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Mission Log
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3rem] text-white/50">
            {missionLog.header}
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3rem] text-white/70">
          <LucideTimer size={16} className="text-amber-400" />
          Countdown To Next Briefing: 01h 17m
        </div>
      </div>
      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-white/70">{missionLog.narrative}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {missionLog.directives.map((directive) => (
          <div
            key={directive}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70"
          >
            <LucideTarget className="mt-1 h-5 w-5 text-amber-300" />
            <span>{directive}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
