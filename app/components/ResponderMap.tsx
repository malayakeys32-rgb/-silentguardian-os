"use client";

import { useEffect, useState } from "react";

type Responder = {
  id: string;
  name: string;
  distanceKm: number;
  etaMinutes: number;
};

export default function ResponderMap() {
  const [responders, setResponders] = useState<Responder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadResponders() {
      setLoading(true);
      const res = await fetch("/api/responders");
      const data = await res.json();
      setResponders(data.responders || []);
      setLoading(false);
    }
    loadResponders();
  }, []);

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #1f2937",
        background:
          "radial-gradient(circle at top, #020617 0%, #000000 55%, #000000 100%)",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
        Responder Map — Nearby Units
      </h2>
      <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
        Shows responders near the incident location with ETA.
      </p>
      {loading ? (
        <div style={{ fontSize: "13px", opacity: 0.7 }}>Loading responders…</div>
      ) : responders.length === 0 ? (
        <div style={{ fontSize: "13px", opacity: 0.7 }}>
          No responders found in range.
        </div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {responders.map((r) => (
            <li
              key={r.id}
              style={{
                padding: "8px 10px",
                borderRadius: "8px",
                border: "1px solid #1f2937",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
              }}
            >
              <span>{r.name}</span>
              <span style={{ opacity: 0.8 }}>
                {r.distanceKm.toFixed(1)} km • {r.etaMinutes} min
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
