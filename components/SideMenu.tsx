import Link from "next/link";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", detail: "Live overview" },
  { href: "/map", label: "Map", detail: "Incident zones" },
  { href: "/report", label: "Report", detail: "Submit incident" },
  { href: "/fentanyl", label: "Fentanyl", detail: "Exposure safety" },
  { href: "/cases", label: "Cases", detail: "Active investigations" },
  { href: "/alerts", label: "Alerts", detail: "Priority warnings" },
  { href: "/security", label: "Security", detail: "Access and audit" },
  { href: "/advanced", label: "Advanced", detail: "Analysis tools" },
];

export default function SideMenu() {
  return (
    <aside className="sg-sidebar" aria-label="Silent Guardian navigation">
      <Link href="/" className="sg-brand">
        <span className="sg-brand-mark" aria-hidden="true"><span>SG</span></span>
        <span>
          <strong>Silent Guardian</strong>
          <small>PUBLIC SAFETY OS</small>
        </span>
      </Link>

      <div className="sg-sidebar-status">
        <span className="sg-status-dot" aria-hidden="true" />
        <span><strong>System online</strong><small>Monitoring active</small></span>
      </div>

      <nav className="sg-sidebar-nav">
        <p className="sg-sidebar-label">Operations</p>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="sg-sidebar-link">
            <span className="sg-sidebar-icon" aria-hidden="true">{item.label.slice(0, 1)}</span>
            <span><strong>{item.label}</strong><small>{item.detail}</small></span>
          </Link>
        ))}
      </nav>

      <div className="sg-sidebar-footer">
        <span>SECURE CHANNEL</span>
        <strong>SG-LOCAL-01</strong>
      </div>
    </aside>
  );
}
