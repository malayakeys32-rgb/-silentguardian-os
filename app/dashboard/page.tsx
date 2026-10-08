import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", maxWidth: "720px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>
        Silent Guardian Dashboard
      </h1>

      {/* Heart Attack Module */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px" }}>Heart Attack Detection</h2>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Real-time monitoring of cardiac distress signals.
        </p>
        <Link href="/heartattack">
          <button
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#38b2ac",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Module
          </button>
        </Link>
      </section>

      {/* Fentanyl Module */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px" }}>Fentanyl Overdose Detection</h2>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          AI-powered chemical exposure and respiratory distress analysis.
        </p>
        <Link href="/fentanyl">
          <button
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#f6ad55",
              color: "#1a202c",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Module
          </button>
        </Link>
      </section>

      {/* Responder Map */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px" }}>Responder Map</h2>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Live geolocation of responders and emergency units.
        </p>
        <Link href="/map">
          <button
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#818cf8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Module
          </button>
        </Link>
      </section>

      {/* Health Monitor */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px" }}>Health Monitor</h2>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Dedicated view for heart-attack monitoring and alert testing.
        </p>
        <Link href="/healthmonitor">
          <button
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#4fd1c5",
              color: "#1a202c",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Module
          </button>
        </Link>
      </section>
    </div>
  );
}

