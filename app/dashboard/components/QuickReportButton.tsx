"use client";

import { useRouter } from "next/navigation";

export default function QuickReportButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/report")} className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-cyan-500 shadow-[0_0_35px_rgba(34,211,238,0.9)] flex items-center justify-center border border-cyan-300/70 hover:scale-105 transition">
      <span className="text-xs font-semibold text-slate-950 tracking-wide">REPORT</span>
    </button>
  );
}
