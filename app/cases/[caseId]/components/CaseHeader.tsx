export default function CaseHeader({ caseId }: { caseId: string }) {
  return <div className="rounded-xl border border-cyan-500/40 bg-slate-900/70 p-4 flex justify-between items-center"><div><p className="text-[11px] text-slate-400">Case ID</p><p className="text-xs font-semibold text-slate-100">{caseId}</p></div><span className="text-[10px] px-3 py-1 rounded-full border border-emerald-400/70 text-emerald-200">Status: Active</span></div>;
}
