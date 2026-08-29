"use client";

export default function HealthMonitor() {
  async function sendHeartAttackAlert() {
    const res = await fetch("/api/heartattack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "nyla-001",
        heartRate: 170,
        symptoms: ["chest_pain"],
      }),
    });

    const data = await res.json();
    console.log("Health Monitor Heart Attack Response:", data);
    alert(`Heart-attack alert sent: ${data.status}`);
  }

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #1f2937",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #000000 100%)",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
        Health Monitor — Heart Attack
      </h2>
      <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
        Trigger a heart-attack alert from the health monitoring system.
      </p>
      <button
        onClick={sendHeartAttackAlert}
        style={{
          padding: "10px 18px",
          backgroundColor: "crimson",
          color: "white",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Monitor Heart Attack Alert
      </button>
    </div>
  );
}
