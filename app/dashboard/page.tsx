import { prisma } from "@/db/client";

async function getStats() {
  try {
    const users = await prisma.user.count();
    const alerts = await prisma.alert.count();
    const reports = await prisma.report.count();
    const fentanyl = await prisma.fentanylAlert.count();

    const revenue = await prisma.subscription.aggregate({
      _sum: { price: true }
    });

    return {
      users,
      alerts,
      reports,
      fentanyl,
      revenue: revenue._sum.price || 0
    };
  } catch (error) {
    // Return default values if database is not available
    return {
      users: 0,
      alerts: 0,
      reports: 0,
      fentanyl: 0,
      revenue: 0
    };
  }
}

export default async function Dashboard() {
  const stats = await getStats();

  return (
    <div className="dashboard">
      <h1>Guardian Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Users</h2>
          <p>{stats.users}</p>
        </div>

        <div className="stat-card">
          <h2>Alerts</h2>
          <p>{stats.alerts}</p>
        </div>

        <div className="stat-card">
          <h2>Reports</h2>
          <p>{stats.reports}</p>
        </div>

        <div className="stat-card">
          <h2>Fentanyl Alerts</h2>
          <p>{stats.fentanyl}</p>
        </div>

        <div className="stat-card">
          <h2>Revenue</h2>
          <p>${stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}
