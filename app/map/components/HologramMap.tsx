export default function HologramMap() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-6 rounded-2xl border border-cyan-500/40 bg-slate-900/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.25),_transparent_60%)]" />
        <p className="absolute bottom-4 left-4 text-[11px] text-slate-300">Hologram Map • Incident Pins • Heat Zones</p>
      </div>
    </div>
  );
}
