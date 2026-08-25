"use client";

import { useEffect, useState } from "react";

type FentanylAlert = {
  id: string;
  location: string;
  description: string;
  createdAt: string;
};

export default function FentanylPage() {
  const [alerts, setAlerts] = useState<FentanylAlert[]>([]);

  useEffect(() => {
    fetch("/api/fentanyl")
      .then((res) => res.json())
      .then((data) => setAlerts(data.alerts || []));
  }, []);

  return (
    <main className="sg-fentanyl">
      <h2>Fentanyl Safety Alerts</h2>
      <p className="sg-subtitle">Community‑reported fentanyl exposure or risk locations.</p>

      <ul className="sg-list">
        {alerts.map((a) => (
          <li key={a.id} className="sg-list-item sg-list-item-warning">
            <h3>{a.location}</h3>
            <p>{a.description}</p>
            <span className="sg-timestamp">{new Date(a.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

