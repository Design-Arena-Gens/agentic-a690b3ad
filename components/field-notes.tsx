import { fieldNotes } from "@/lib/case-data";
import { LucideFeather, LucideQuote } from "lucide-react";

export function FieldNotes() {
  return (
    <section className="rounded-3xl border border-white/5 bg-slate-950/80 p-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-title text-sm uppercase tracking-[0.5rem] text-amber-400">
            Field Notes
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Extracted annotations from on-site operatives. Logged under Omega clearance.
          </p>
        </div>
        <LucideFeather className="h-9 w-9 text-amber-300" />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {fieldNotes.map((note) => (
          <article
            key={note.author}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
          >
            <div className="absolute -top-11 -right-8 h-24 w-24 rounded-full bg-amber-500/10 blur-3xl" />
            <LucideQuote className="h-6 w-6 text-amber-300" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">{note.excerpt}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3rem] text-white/50">{note.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
