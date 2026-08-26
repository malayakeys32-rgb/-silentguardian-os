export default function ActiveAlerts() {
  const alerts = [
    { id: 1, title: "Area Lockdown", description: "Avoid 5th & Main. Active hazardous substance investigation.", level: "Critical" },
    { id: 2, title: "Crowd Control", description: "Large gathering near station. Monitor for escalation.", level: "Caution" },
  ];

  return (
    <div className="h-full rounded-xl border border-pink-500/40 bg-slate-900/70 backdrop-blur-md p-4 flex flex-col">
      <h2 className="text-sm font-semibold text-pink-100 mb-3 tracking-wide">Active Alerts</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="relative rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700/70 p-3 shadow-[0_0_25px_rgba(236,72,153,0.35)]">
            <div className="absolute inset-0 rounded-xl border border-pink-500/40 opacity-40 pointer-events-none" />
            <p className="text-xs font-semibold text-pink-100">{alert.title}</p>
            <p className="text-[11px] text-slate-300 mt-1">{alert.description}</p>
            <span className="mt-2 inline-flex text-[10px] px-2 py-1 rounded-full border border-pink-400/70 text-pink-200">{alert.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
