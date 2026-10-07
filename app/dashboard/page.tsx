import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px",
        background:
          "radial-gradient(circle at top, #4fd1c5 0, #1a202c 45%, #000000 100%)",
        color: "#f7fafc",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <button
          style={{
            marginBottom: "24px",
            padding: "8px 14px",
            fontSize: "12px",
            borderRadius: "999px",
            border: "1px solid rgba(226,232,240,0.3)",
            background: "rgba(15,23,42,0.7)",
            color: "#e2e8f0",
            cursor: "pointer",
          }}
        >
          Back Home
        </button>

        <h1
          style={{
            fontSize: "26px",
            marginBottom: "8px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Silent Guardian Dashboard
        </h1>

        <p
          style={{
            fontSize: "13px",
            opacity: 0.8,
            marginBottom: "24px",
          }}
        >
          Central control for emergency intelligence modules—heart attack, fentanyl overdose, and responder coordination.
        </p>

        {/* Heart Attack Detection */}
        <section
          style={{
            marginBottom: "20px",
            padding: "16px",
            borderRadius: "12px",
            background: "rgba(15,23,42,0.85)",
            border: "1px solid rgba(56,178,172,0.4)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
            Heart Attack Detection
          </h2>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "12px",
            }}
          >
            Real-time monitoring of cardiac distress signals.
          </p>
          <Link href="/heartattack">
            <button
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(90deg, #38b2ac, #4fd1c5, #63b3ed)",
                color: "#0f172a",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Open Module
            </button>
          </Link>
        </section>

        {/* Fentanyl Overdose Detection */}
        <section
          style={{
            marginBottom: "20px",
            padding: "16px",
            borderRadius: "12px",
            background: "rgba(15,23,42,0.85)",
            border: "1px solid rgba(246,173,85,0.5)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
            Fentanyl Overdose Detection
          </h2>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "12px",
            }}
          >
            AI-powered chemical exposure and respiratory distress analysis.
          </p>
          <Link href="/fentanyl">
            <button
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(90deg, #f6ad55, #fbd38d, #fed7e2)",
                color: "#1a202c",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Open Module
            </button>
          </Link>
        </section>

        {/* Responder Map */}
        <section
          style={{
            marginBottom: "20px",
            padding: "16px",
            borderRadius: "12px",
            background: "rgba(15,23,42,0.85)",
            border: "1px solid rgba(129,140,248,0.6)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
            Responder Map
          </h2>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "12px",
            }}
          >
            Live geolocation of responders and emergency units.
          </p>
          <Link href="/map">
            <button
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(90deg, #818cf8, #a855f7, #ec4899)",
                color: "#0f172a",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Open Module
            </button>
          </Link>
        </section>

        <p
          style={{
            marginTop: "32px",
            fontSize: "11px",
            opacity: 0.6,
          }}
        >
          Silent Guardian © 2026 — Emergency Intelligence System
        </p>
      </div>
    </div>
  );
}
