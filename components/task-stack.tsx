import { outstandingTasks } from "@/lib/case-data";
import { LucideAlertTriangle, LucideCheckCircle2, LucideUserCircle2 } from "lucide-react";

const urgencyPalette: Record<string, string> = {
  CRITICAL: "text-rose-300 border-rose-500/60",
  HIGH: "text-amber-300 border-amber-500/60",
  MED: "text-sky-300 border-sky-500/60",
  LOW: "text-emerald-300 border-emerald-500/60"
};

export function TaskStack() {
  return (
    <section className="glass-panel panel-with-ring relative overflow-hidden rounded-3xl p-10">
      <span className="glow-ring" aria-hidden />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Operational Checklist
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Prioritized directives aligned with midnight taskforce operations board.
          </p>
        </div>
        <LucideCheckCircle2 className="h-10 w-10 text-emerald-400" />
      </div>
      <div className="mt-8 space-y-5">
        {outstandingTasks.map((task) => (
          <article
            key={task.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-400/80 via-orange-400/60 to-red-500/60" />
            <div className="flex flex-col gap-3 pl-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                <span
                  className={`rounded-full border px-4 py-1 text-xs uppercase tracking-[0.3rem] ${urgencyPalette[task.urgency] ?? "text-white/70 border-white/30"}`}
                >
                  {task.urgency}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <LucideUserCircle2 className="h-4 w-4 text-amber-300" />
                <span>{task.owner}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <LucideAlertTriangle className="h-4 w-4 text-orange-300" />
                <p>{task.notes}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
