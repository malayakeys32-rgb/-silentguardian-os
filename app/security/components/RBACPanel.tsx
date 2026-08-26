export default function RBACPanel() {
  const roles = ["Civilian", "Responder", "Admin"];
  return <div className="rounded-xl border border-cyan-500/60 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-cyan-100 mb-3 tracking-wide">Role-Based Access</h2><div className="flex flex-wrap gap-2 text-[11px]">{roles.map((role) => <span key={role} className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200">{role}</span>)}</div></div>;
}
