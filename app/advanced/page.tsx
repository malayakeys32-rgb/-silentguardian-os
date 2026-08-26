import PatternRecognition from "./components/PatternRecognition";
import SensorIntegration from "./components/SensorIntegration";
import AutoSummaries from "./components/AutoSummaries";

export default function AdvancedPage() {
  return <div className="min-h-screen bg-slate-950 text-slate-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-4"><PatternRecognition /><SensorIntegration /><AutoSummaries /></div>;
}
