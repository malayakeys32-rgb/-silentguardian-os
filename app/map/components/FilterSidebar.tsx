const filters = ["Fentanyl", "Violence", "Suspicious Activity", "Environmental", "Medical"];

export default function FilterSidebar() {
  return (
    <div className="space-y-3">
      <h2 className="text-xs font-semibold text-cyan-100 tracking-wide">Filters</h2>
      {filters.map((filter) => <button key={filter} className="w-full text-left text-[11px] px-3 py-2 rounded-lg border border-slate-700/70 bg-slate-900/80 hover:border-cyan-400/70 hover:text-cyan-100 transition">{filter}</button>)}
    </div>
  );
}
