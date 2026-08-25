import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="sg-dashboard">
      <h2>Guardian Dashboard</h2>
      <div className="sg-grid">
        <Link href="/alerts" className="sg-card">General Safety Alerts</Link>
        <Link href="/reports" className="sg-card">Submit Incident Report</Link>
        <Link href="/fentanyl" className="sg-card sg-card-warning">Fentanyl Safety Alerts</Link>
      </div>
    </main>
  );
}

