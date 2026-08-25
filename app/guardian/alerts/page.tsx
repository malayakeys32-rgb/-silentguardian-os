"use client";

import { useEffect, useState } from "react";

type Alert = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    fetch("/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data.alerts || []));
  }, []);

  return (
    <main className="sg-alerts">
      <h2>General Safety Alerts</h2>
      <ul className="sg-list">
        {alerts.map((a) => (
          <li key={a.id} className="sg-list-item">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="sg-timestamp">{new Date(a.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

