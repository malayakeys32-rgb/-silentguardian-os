// app/dashboard/page.tsx

"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">

      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <h1 className="text-5xl font-bold tracking-wide">
          Silent Guardian Dashboard
        </h1>

        <Link href="/" className="block">
          <button className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
            Back Home
          </button>
        </Link>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Heart Attack Module */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Heart Attack Detection</h2>
          <p className="text-gray-300 mb-6">
            Real‑time monitoring of cardiac distress signals.
          </p>

          <Link href="/modules/heart-attack" className="block">
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Open Module
            </button>
          </Link>
        </div>

        {/* Fentanyl Module */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-purple-600">
          <h2 className="text-2xl font-semibold mb-4">Fentanyl Overdose Detection</h2>
          <p className="text-gray-300 mb-6">
            AI‑powered chemical exposure and respiratory distress analysis.
          </p>

          <Link href="/modules/fentanyl" className="block">
            <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">
              Open Module
            </button>
          </Link>
        </div>

        {/* Responder Map */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-600">
          <h2 className="text-2xl font-semibold mb-4">Responder Map</h2>
          <p className="text-gray-300 mb-6">
            Live geolocation of responders and emergency units.
          </p>

          <Link href="/modules/responder-map" className="block">
            <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg">
              Open Module
            </button>
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        Silent Guardian © 2026 — Emergency Intelligence System
      </footer>
    </div>
  );
}
