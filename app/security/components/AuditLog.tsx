export default function AuditLog() {
  const entries = ["Responder A-12 viewed Case SG-001", "Admin updated alert severity in Downtown Corridor"];
  return <div className="rounded-xl border border-violet-500/60 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-violet-100 mb-3 tracking-wide">Audit Log</h2><ul className="space-y-2 text-[11px] text-slate-300">{entries.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>;
}
