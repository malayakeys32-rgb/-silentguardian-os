export default function CaseTimeline() {
  const events = [{ time: "00:00", label: "Initial report received" }, { time: "00:05", label: "Responder dispatched" }, { time: "00:12", label: "Scene secured" }];
  return <div className="rounded-xl border border-violet-500/40 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-violet-100 mb-3 tracking-wide">Timeline</h2><div className="space-y-2 text-[11px]">{events.map((event) => <div key={event.time} className="flex items-center gap-3"><span className="text-slate-400 w-12">{event.time}</span><div className="flex-1 h-px bg-slate-700/70" /><span className="text-slate-200">{event.label}</span></div>)}</div></div>;
}
