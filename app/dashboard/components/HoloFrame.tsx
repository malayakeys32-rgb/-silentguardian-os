export default function HoloFrame({ children }) {
  return (
    <div className="holo-frame">
      <aside className="holo-sidebar">
        <h2>Silent Guardian</h2>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/dashboard/alerts">Alerts</a>
          <a href="/dashboard/reports">Reports</a>
          <a href="/dashboard/pricing">Pricing</a>
        </nav>
      </aside>

      <div className="holo-content">{children}</div>
    </div>
  );
}
