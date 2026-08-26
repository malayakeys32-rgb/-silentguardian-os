export default function ResponderSidebar() {
  const responders = [{ id: 1, name: "Unit A-12", status: "On Scene" }, { id: 2, name: "Medic B-3", status: "En Route" }];
  return (
    <div className="space-y-3">
      <h2 className="text-xs font-semibold text-violet-100 tracking-wide">Responders</h2>
      <div className="space-y-2">{responders.map((responder) => <div key={responder.id} className="rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 py-2 flex justify-between items-center"><p className="text-[11px]">{responder.name}</p><span className="text-[10px] text-slate-400">{responder.status}</span></div>)}</div>
    </div>
  );
}
