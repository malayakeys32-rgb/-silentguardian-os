import CriticalAlerts from "./components/CriticalAlerts";
import AreaWarnings from "./components/AreaWarnings";
import ResolvedAlerts from "./components/ResolvedAlerts";

export default function AlertsPage() {
  return <div className="min-h-screen bg-slate-950 text-slate-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-4"><CriticalAlerts /><AreaWarnings /><ResolvedAlerts /></div>;
}
