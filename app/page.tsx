import { CaseHeader } from "@/components/case-header";
import { Timeline } from "@/components/timeline";
import { EvidenceGrid } from "@/components/evidence-grid";
import { SuspectBoard } from "@/components/suspect-board";
import { TaskStack } from "@/components/task-stack";
import { DigitalTraceGallery } from "@/components/digital-trace-gallery";
import { MissionBrief } from "@/components/mission-brief";
import { FieldNotes } from "@/components/field-notes";
import { SceneMoodboard } from "@/components/scene-moodboard";
import { SignalTicker } from "@/components/signal-ticker";

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-14 px-6 py-12">
      <SignalTicker />
      <CaseHeader />
      <SceneMoodboard />
      <Timeline />
      <EvidenceGrid />
      <SuspectBoard />
      <DigitalTraceGallery />
      <MissionBrief />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <TaskStack />
        <FieldNotes />
      </div>
      <footer className="pb-16 pt-6 text-center text-xs uppercase tracking-[0.4rem] text-white/30">
        Secure Node • Midnight Taskforce • Meridian Veil Watch
      </footer>
    </main>
  );
}
