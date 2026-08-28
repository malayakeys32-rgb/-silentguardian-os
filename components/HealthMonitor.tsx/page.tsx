export default function HealthMonitor() {

  // Heart Attack Trigger Function
  async function sendHeartAttackAlert() {
    const res = await fetch("/api/heartattack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "nyla-001",
        heartRate: 170,
        symptoms: ["chest_pain"]
      })
    });

    const data = await res.json();
    console.log("Health Monitor Heart Attack Response:", data);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Silent Guardian — Health Monitor</h2>

      <p>Trigger a heart‑attack alert from the health monitoring system.</p>

      <button
        onClick={sendHeartAttackAlert}
        style={{
          padding: "10px 20px",
          backgroundColor: "crimson",
          color: "white",
          borderRadius: "8px",
          border: "none",   
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px"
        }}
      >
        Monitor Heart Attack Alert
      </button>
    </div>
  );
}
