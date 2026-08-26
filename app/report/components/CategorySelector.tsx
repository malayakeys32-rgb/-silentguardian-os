const categories = ["Fentanyl Exposure", "Violence", "Suspicious Activity", "Environmental Hazard", "Medical Emergency"];

export default function CategorySelector() {
  return <div className="rounded-xl border border-cyan-500/40 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-cyan-100 mb-3 tracking-wide">Category</h2><div className="flex flex-wrap gap-2">{categories.map((category) => <button key={category} className="text-[11px] px-3 py-2 rounded-full border border-slate-700/70 bg-slate-950/80 hover:border-cyan-400/70 hover:text-cyan-100 transition">{category}</button>)}</div></div>;
}
