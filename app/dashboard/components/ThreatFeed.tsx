export default function ThreatFeed() {
  const items = [
    { id: 1, type: "Fentanyl Exposure", severity: "Critical", location: "Downtown", time: "2 min ago" },
    { id: 2, type: "Suspicious Activity", severity: "Caution", location: "Transit Hub", time: "10 min ago" },
  ];

  return (
    <div className="h-full rounded-xl border border-cyan-500/40 bg-slate-900/70 backdrop-blur-md p-4 flex flex-col">
      <h2 className="text-sm font-semibold text-cyan-100 mb-3 tracking-wide">Live Threat Feed</h2>
      <div className="space-y-2 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 py-2 flex justify-between items-center hover:border-cyan-400/60 transition">
            <div><p className="text-xs font-medium">{item.type}</p><p className="text-[10px] text-slate-400">{item.location} • {item.time}</p></div>
            <span className={`text-[10px] px-2 py-1 rounded-full border ${item.severity === "Critical" ? "border-red-500/70 text-red-300" : "border-yellow-400/70 text-yellow-200"}`}>{item.severity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
