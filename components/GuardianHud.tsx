import Link from "next/link";

export default function GuardianHUD() {
  return (
    <header className="hud">
      <div className="hud-title">Silent Guardian</div>
      <nav className="hud-nav">
        <Link href="/" className="hud-link">Home</Link>
        <Link href="/dashboard" className="hud-link">Dashboard</Link>
        <Link href="/alerts" className="hud-link">Alerts</Link>
        <Link href="/reports" className="hud-link">Reports</Link>
        <Link href="/fentanyl" className="hud-link hud-link-warning">Fentanyl</Link>
      </nav>
    </header>
  );
}

