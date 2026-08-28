"use client";

export default function Page() {

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
    console.log("Emergency Page Heart Attack Response:", data);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Silent Guardian — Emergency Page</h1>

      <p>
        This page is dedicated to emergency actions.  
        Use the button below to trigger a heart‑attack alert.
      </p>

      <button
        onClick={sendHeartAttackAlert}
        style={{
          padding: "10px 20px",
          backgroundColor: "darkred",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px"
        }}
      >
        Emergency Heart Attack Alert
      </button>
    </div>
  );
}
