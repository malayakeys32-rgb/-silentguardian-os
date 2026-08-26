export default function SafetyInstructions() {
  const steps = ["Avoid direct contact with unknown powders or residues.", "Ventilate the area if safe to do so.", "Do not eat, drink, or smoke near suspected substances.", "Seek medical evaluation if exposure is suspected."];
  return <div className="rounded-xl border border-amber-500/60 bg-slate-900/70 p-4"><h2 className="text-xs font-semibold text-amber-200 mb-3 tracking-wide">Safety Guidance</h2><ul className="space-y-2 text-[11px] text-slate-300">{steps.map((step, index) => <li key={step} className="flex gap-2"><span className="text-amber-300">{index + 1}.</span><span>{step}</span></li>)}</ul></div>;
}
