export default function Page() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
        gap: "32px",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
          Silent Guardian — City Watch
        </h1>
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "24px" }}>
          Real-time protective intelligence for heart-attack detection, fentanyl
          overdose alerts, and responder coordination.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="/dashboard"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #0ea5e9 0%, #f97316 50%, #22c55e 100%)",
              color: "#050509",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Open Unified Dashboard
          </a>
          <a
            href="/emergency"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid #374151",
              color: "#e5e7eb",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Emergency Control Center
          </a>
        </div>
      </div>
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #1f2937",
          background:
            "radial-gradient(circle at top, #111827 0%, #020617 55%, #000000 100%)",
          padding: "20px",
        }}
      >
        <div
          style={{
            height: "260px",
            borderRadius: "12px",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.95)), url('/silent-guardian-city.jpg') center/cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#e5e7eb",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Silent Guardian
          </div>
          <div style={{ fontSize: "11px", opacity: 0.7, marginTop: "4px" }}>
            Realistic night city • shield overlay • black veil
          </div>
        </div>
      </div>
    </div>
  );
}
