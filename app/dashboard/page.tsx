import ThreatFeed from "./components/ThreatFeed";
import ActiveAlerts from "./components/ActiveAlerts";
import MiniMap from "./components/MiniMap";
import QuickReportButton from "./components/QuickReportButton";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900/60 backdrop-blur-md border-b border-cyan-500/40">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          <span className="font-semibold tracking-wide text-cyan-100">Silent Guardian</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-300">Responder Online</span>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
        <section><ThreatFeed /></section>
        <section><ActiveAlerts /></section>
        <section><MiniMap /></section>
      </main>
      <QuickReportButton />
    </div>
  );
}
