"use client";

import { useRouter } from "next/navigation";

export default function FentanylReportButton() {
  const router = useRouter();
  return <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end"><button onClick={() => router.push("/report")} className="px-5 py-2 rounded-full bg-red-500 text-slate-950 text-xs font-semibold tracking-wide border border-red-300/70 shadow-[0_0_25px_rgba(248,113,113,0.8)] hover:scale-105 transition">Report Fentanyl Incident</button></div>;
}
