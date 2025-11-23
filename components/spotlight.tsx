export function Spotlight() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-amber-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="grain" />
    </div>
  );
}
