import Link from "next/link";

export default function Home() {
  return (
    <main className="sg-root">
      <h1>Silent Guardian</h1>
      <p>Public safety alerts and incident reporting.</p>
      <nav aria-label="Silent Guardian modules" className="sg-nav">
        <Link href="/dashboard" className="sg-button">Dashboard</Link>
        <Link href="/map" className="sg-button">Map</Link>
        <Link href="/report" className="sg-button">Submit Incident Report</Link>
        <Link href="/fentanyl" className="sg-button">Fentanyl Module</Link>
        <Link href="/cases" className="sg-button">Cases</Link>
        <Link href="/alerts" className="sg-button">Alerts</Link>
        <Link href="/security" className="sg-button">Security</Link>
        <Link href="/advanced" className="sg-button">Advanced</Link>
      </nav>
    </main>
  );
}
