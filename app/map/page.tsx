import HologramMap from "./components/HologramMap";
import FilterSidebar from "./components/FilterSidebar";
import ResponderSidebar from "./components/ResponderSidebar";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <aside className="w-64 border-r border-cyan-500/40 bg-slate-900/70 backdrop-blur-md p-4"><FilterSidebar /></aside>
      <main className="flex-1 relative"><HologramMap /></main>
      <aside className="w-72 border-l border-violet-500/40 bg-slate-900/70 backdrop-blur-md p-4"><ResponderSidebar /></aside>
    </div>
  );
}
