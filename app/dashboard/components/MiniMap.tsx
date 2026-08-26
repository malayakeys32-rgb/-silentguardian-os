export default function MiniMap() {
  return (
    <div className="h-full rounded-xl border border-violet-500/40 bg-slate-900/70 backdrop-blur-md p-4 flex flex-col">
      <h2 className="text-sm font-semibold text-violet-100 mb-3 tracking-wide">Map Intelligence (Mini)</h2>
      <div className="flex-1 rounded-lg bg-slate-950/80 border border-violet-500/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_60%)]" />
        <div className="absolute inset-4 border border-slate-700/70 rounded-lg" />
        <p className="absolute bottom-3 left-3 text-[10px] text-slate-400">Hotspots • Pins • Proximity</p>
      </div>
    </div>
  );
}
