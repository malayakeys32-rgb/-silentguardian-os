import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="sg-dashboard">
      <h2>Guardian Dashboard</h2>
      <div className="sg-grid">
        <Link href="/guardian/alerts" className="sg-card">General Safety Alerts</Link>
        <Link href="/guardian/reports" className="sg-card">Submit Incident Report</Link>
        <Link href="/guardian/fentanyl" className="sg-card sg-card-warning">Fentanyl Safety Alerts</Link>
      </div>
    </main>
  );
}

