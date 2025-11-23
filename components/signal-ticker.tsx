"use client";

import Marquee from "react-fast-marquee";
import { LucideRadioTower, LucideShieldAlert } from "lucide-react";

const signals = [
  "Encrypted broadcast pending decryption •",
  "Thermal residue detected on roof vent •",
  "External taskforce en route •",
  "Meridian Veil signature phrase identified •",
  "Containment perimeter holding •",
  "Glyph translation cross-match at 37%"
];

export function SignalTicker() {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/5 bg-white/5">
      <div className="absolute inset-y-0 left-0 flex items-center gap-2 bg-gradient-to-r from-amber-500/40 to-transparent px-4 text-xs uppercase tracking-[0.3rem] text-white">
        <LucideRadioTower size={16} />
        Live Signal Feed
      </div>
      <Marquee autoFill speed={35} className="py-3 pl-28 text-xs uppercase tracking-[0.4rem] text-white/60">
        {signals.map((signal) => (
          <span key={signal} className="mr-12 flex items-center gap-2">
            <LucideShieldAlert size={14} className="text-amber-400" />
            {signal}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
