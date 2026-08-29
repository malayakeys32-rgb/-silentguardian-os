"use client";

export default function FentanylMonitor() {
  async function sendFentanylAlert() {
    const res = await fetch("/api/fentanyl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "nyla-001",
        location: "Pittsburg, CA",
        detectedLevel: 0.85,
      }),
    });

    const data = await res.json();
    console.log("Fentanyl Response:", data);
    alert(`Fentanyl alert sent: ${data.status}`);
  }

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #1f2937",
        background:
          "radial-gradient(circle at top, #111827 0%, #020617 55%, #000000 100%)",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
        Fentanyl Overdose Monitor
      </h2>
      <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
        Trigger a fentanyl-overdose alert for rapid response.
      </p>
      <button
        onClick={sendFentanylAlert}
        style={{
          padding: "10px 18px",
          backgroundColor: "#f97316",
          color: "#050509",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Trigger Fentanyl Alert
      </button>
    </div>
  );
}
