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

      <section className="sg-grid">
        <article className="sg-card sg-card-warning">
          <h3>Possible Fentanyl Side Effects</h3>
          <ul>
            <li>Extreme sleepiness or difficulty staying awake</li>
            <li>Slow, shallow, or stopped breathing</li>
            <li>Pinpoint pupils, confusion, or limpness</li>
            <li>Blue or gray lips and fingertips</li>
          </ul>
          <p>If an overdose may be happening, call emergency services, give naloxone if available, and stay with the person.</p>
        </article>

        <article className="sg-card">
          <h3>Heart Attack Warning Signs</h3>
          <ul>
            <li>Chest pressure, squeezing, or pain</li>
            <li>Pain spreading to the arm, back, neck, jaw, or stomach</li>
            <li>Shortness of breath, cold sweat, nausea, or sudden weakness</li>
          </ul>
          <p>Call emergency services immediately. Do not drive yourself if symptoms may be a heart attack.</p>
        </article>
      </section>

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

