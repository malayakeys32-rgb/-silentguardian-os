export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* HEADER USING YOUR IMAGE */}
      <header
        style={{
          width: "100%",
          height: "420px",
          borderRadius: "20px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.95)), url('/header-sg.jpg') center/cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "#e5e7eb",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            Silent Guardian
          </h1>
          <p
            style={{
              fontSize: "18px",
              opacity: 0.85,
              color: "#e5e7eb",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Protective Intelligence System for real‑time detection, alerts, and
            responder coordination across your city.
          </p>
        </div>
      </header>

      {/* VALUE SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "32px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            City‑scale protective intelligence
          </h2>
          <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "16px" }}>
            Silent Guardian watches for heart‑attack signals, fentanyl‑overdose
            risk, and responder proximity in real time, giving you a unified
            emergency surface instead of fragmented systems.
          </p>
          <ul style={{ fontSize: "14px", opacity: 0.9 }}>
            <li>• Heart‑attack detection & alert routing</li>
            <li>• Fentanyl‑overdose risk monitoring</li>
            <li>• Responder map & ETA visualization</li>
            <li>• Unified dashboard for live incidents</li>
          </ul>
        </div>
        <div
          style={{
            borderRadius: "16px",
            border: "1px solid #1f2937",
            padding: "20px",
            background:
              "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #000000 100%)",
          }}
        >
          <div style={{ fontSize: "12px", opacity: 0.7, marginBottom: "8px" }}>
            Live modules
          </div>
          <div style={{ fontSize: "16px", marginBottom: "6px" }}>
            Heart‑attack • Fentanyl • Responders
          </div>
          <div style={{ fontSize: "12px", opacity: 0.7 }}>
            Integrated into one control surface.
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Pricing & tiers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {/* BASIC */}
          <div
            style={{
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "24px",
              background:
                "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #000000 100%)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>Basic</h3>
            <p style={{ opacity: 0.7, marginBottom: "16px" }}>
              Core monitoring for individuals and small teams.
            </p>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>$9/mo</div>
            <ul style={{ marginTop: "16px", opacity: 0.85, fontSize: "14px" }}>
              <li>• Heart‑attack detection</li>
              <li>• Basic fentanyl alerts</li>
              <li>• Personal dashboard</li>
            </ul>
          </div>

          {/* PRO */}
          <div
            style={{
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "24px",
              background:
                "radial-gradient(circle at top, #1e293b 0%, #0f172a 55%, #020617 100%)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>Pro</h3>
            <p style={{ opacity: 0.7, marginBottom: "16px" }}>
              Advanced detection and responder integration.
            </p>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>$29/mo</div>
            <ul style={{ marginTop: "16px", opacity: 0.85, fontSize: "14px" }}>
              <li>• Heart‑attack AI analysis</li>
              <li>• Advanced fentanyl detection</li>
              <li>• Responder map system</li>
              <li>• Priority alerts</li>
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div
            style={{
              border: "1px solid #4b5563",
              borderRadius: "16px",
              padding: "24px",
              background:
                "radial-gradient(circle at top, #334155 0%, #1e293b 55%, #0f172a 100%)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
              Enterprise
            </h3>
            <p style={{ opacity: 0.7, marginBottom: "16px" }}>
              Full emergency intelligence suite for cities and organizations.
            </p>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>$99/mo</div>
            <ul style={{ marginTop: "16px", opacity: 0.85, fontSize: "14px" }}>
              <li>• Full medical detection suite</li>
              <li>• Fentanyl AI risk modeling</li>
              <li>• Multi‑unit responder coordination</li>
              <li>• Dispatch integration</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
