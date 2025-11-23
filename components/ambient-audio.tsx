"use client";

import { useEffect, useRef, useState } from "react";

const SOUNDTRACK_URL =
  "https://cdn.pixabay.com/audio/2021/09/24/audio_5c27cf3132.mp3";

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(SOUNDTRACK_URL);
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;
    const cleanup = () => {
      audio.pause();
      audioRef.current = null;
    };
    setReady(true);
    return cleanup;
  }, []);

  useEffect(() => {
    if (!ready) return;
    const handler = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          /* ignored */
        });
      }
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
    window.addEventListener("pointerdown", handler, { once: true });
    window.addEventListener("keydown", handler, { once: true });
    return () => {
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
  }, [ready]);

  return null;
}
