export default function ExposureAlerts() {
  const alerts = [{ id: 1, area: "Downtown Corridor", status: "Active Investigation" }, { id: 2, area: "Warehouse District", status: "Confirmed Exposure" }];
  return <div className="rounded-xl border border-purple-500/60 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-purple-200 mb-3 tracking-wide">Nearby Exposure Alerts</h2><div className="space-y-2 text-[11px]">{alerts.map((alert) => <div key={alert.id} className="rounded-lg border border-slate-700/70 bg-slate-950/80 px-3 py-2 flex justify-between"><span className="text-slate-200">{alert.area}</span><span className="text-slate-400">{alert.status}</span></div>)}</div></div>;
}
