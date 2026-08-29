import HealthMonitor from "../components/HealthMonitor";

export default function Page() {
  return (
    <div style={{ maxWidth: "640px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
        Health Monitor — Silent Guardian
      </h1>
      <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
        Dedicated view for heart-attack monitoring and alert testing.
      </p>
      <HealthMonitor />
    </div>
  );
}
