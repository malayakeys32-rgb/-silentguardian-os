import HealthMonitor from "../components/HealthMonitor";
import FentanylMonitor from "../components/FentanylMonitor";
import ResponderMap from "../components/ResponderMap";

export default function Page() {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
        Unified Emergency Dashboard
      </h1>
      <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
        Heart-attack detection, fentanyl-overdose alerts, and responder
        coordination in one control surface.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "20px",
        }}
      >
        <div style={{ display: "grid", gap: "16px" }}>
          <HealthMonitor />
          <FentanylMonitor />
        </div>
        <ResponderMap />
      </div>
    </div>
  );
}
