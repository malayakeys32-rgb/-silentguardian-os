import ExposureMeter from "./components/ExposureMeter";
import SafetyInstructions from "./components/SafetyInstructions";
import ExposureAlerts from "./components/ExposureAlerts";
import FentanylReportButton from "./components/FentanylReportButton";

export default function FentanylPage() {
  return <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col"><header className="px-6 py-4 border-b border-red-500/40 bg-slate-900/70 backdrop-blur-md"><h1 className="text-sm font-semibold tracking-wide text-red-200">Fentanyl Exposure Module</h1></header><main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-6"><ExposureMeter /><SafetyInstructions /><ExposureAlerts /></main><FentanylReportButton /></div>;
}
