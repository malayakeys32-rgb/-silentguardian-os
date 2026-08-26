import CategorySelector from "./components/CategorySelector";
import EvidenceCapture from "./components/EvidenceCapture";
import LocationStamp from "./components/LocationStamp";
import AISummary from "./components/AISummary";
import SubmitReportButton from "./components/SubmitReportButton";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="px-6 py-4 border-b border-cyan-500/40 bg-slate-900/70 backdrop-blur-md"><h1 className="text-sm font-semibold tracking-wide text-cyan-100">New Incident Report</h1></header>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-6"><section className="space-y-4"><CategorySelector /><EvidenceCapture /></section><section className="space-y-4"><LocationStamp /><AISummary /></section></main>
      <SubmitReportButton />
    </div>
  );
}
