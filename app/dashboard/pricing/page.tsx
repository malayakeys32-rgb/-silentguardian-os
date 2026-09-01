export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>

      <div className="pricing-grid">
        <div className="tier">
          <h2>Basic</h2>
          <p>$9 / month</p>
          <ul>
            <li>Personal alerts</li>
            <li>Heart attack detection</li>
            <li>Basic fentanyl detection</li>
          </ul>
        </div>

        <div className="tier">
          <h2>Pro</h2>
          <p>$29 / month</p>
          <ul>
            <li>Advanced AI detection</li>
            <li>Responder map</li>
            <li>Priority alerts</li>
          </ul>
        </div>

        <div className="tier">
          <h2>Enterprise</h2>
          <p>$99 / month</p>
          <ul>
            <li>Dispatch integration</li>
            <li>Custom dashboards</li>
            <li>API access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
