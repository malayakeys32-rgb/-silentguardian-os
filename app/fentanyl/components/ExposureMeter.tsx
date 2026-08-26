export default function ExposureMeter() {
  return <div className="rounded-xl border border-red-500/60 bg-slate-900/70 p-4 flex flex-col items-center"><h2 className="text-xs font-semibold text-red-200 mb-3 tracking-wide">Exposure Risk</h2><div className="h-32 w-32 rounded-full border border-red-500/70 bg-slate-950/80 flex items-center justify-center shadow-[0_0_35px_rgba(248,113,113,0.8)]"><span className="text-xs text-red-200">HIGH</span></div><p className="mt-3 text-[11px] text-slate-300 text-center">Risk level based on nearby incidents and sensor data.</p></div>;
}
