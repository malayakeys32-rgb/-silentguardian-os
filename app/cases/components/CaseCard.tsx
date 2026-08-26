"use client";

import { useRouter } from "next/navigation";

interface CaseData { id: string; status: string; title: string; updated: string; }

export default function CaseCard({ caseData }: { caseData: CaseData }) {
  const router = useRouter();
  return <button onClick={() => router.push(`/cases/${caseData.id}`)} className="w-full text-left rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 hover:border-cyan-400/70 transition"><p className="text-[11px] text-slate-400">{caseData.id}</p><p className="text-xs font-semibold text-slate-100">{caseData.title}</p><div className="mt-1 flex justify-between text-[10px] text-slate-400"><span>Status: {caseData.status}</span><span>Updated: {caseData.updated}</span></div></button>;
}
