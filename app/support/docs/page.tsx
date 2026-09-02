'use client';

import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Documentation</h1>
        <Link href="/support" className="sg-button">Back to Support</Link>
      </div>

      <div className="sg-docs-container">
        <section className="sg-doc-section">
          <h2>Getting Started</h2>
          <p>Welcome to Silent Guardian. This guide will help you get up and running with our platform.</p>
          
          <h3>Creating Your First Report</h3>
          <p>Navigate to the Report section from the sidebar and follow these steps:</p>
          <ol>
            <li>Select the incident type from the dropdown</li>
            <li>Provide location details</li>
            <li>Add evidence (photos, videos, audio)</li>
            <li>Fill in the incident details</li>
            <li>Submit the report</li>
          </ol>

          <h3>Understanding the Dashboard</h3>
          <p>The dashboard provides a real-time overview of system status and recent alerts:</p>
          <ul>
            <li><strong>Total Users:</strong> Total registered users in the system</li>
            <li><strong>Alerts:</strong> Number of active alerts</li>
            <li><strong>Reports:</strong> Total incident reports submitted</li>
            <li><strong>Fentanyl Alerts:</strong> Drug exposure alerts</li>
            <li><strong>Revenue:</strong> System subscription revenue</li>
          </ul>
        </section>

        <section className="sg-doc-section">
          <h2>Features</h2>
          
          <h3>Health Monitor</h3>
          <p>Track vital signs and health alerts in real-time. The Health Monitor shows:</p>
          <ul>
            <li>Heart rate monitoring</li>
            <li>Blood pressure tracking</li>
            <li>Alert notifications</li>
          </ul>

          <h3>Map</h3>
          <p>Visualize incident zones and responder locations on an interactive map.</p>

          <h3>Fentanyl Safety</h3>
          <p>Access resources and safety information about fentanyl exposure:</p>
          <ul>
            <li>Exposure alerts</li>
            <li>Safety instructions</li>
            <li>Report suspicious activity</li>
          </ul>

          <h3>Cases Management</h3>
          <p>Track and manage active investigations with detailed case records.</p>
        </section>

        <section className="sg-doc-section">
          <h2>Security & Privacy</h2>
          <p>Your data security is our top priority. All data is encrypted with military-grade encryption.</p>
          
          <h3>Access Control</h3>
          <p>Role-based access control ensures only authorized personnel can access sensitive data.</p>

          <h3>Audit Logging</h3>
          <p>All system activities are logged and audited for compliance and security purposes.</p>
        </section>

        <section className="sg-doc-section">
          <h2>Advanced Features</h2>
          
          <h3>Pattern Recognition</h3>
          <p>AI-powered pattern recognition identifies trends and anomalies in incident data.</p>

          <h3>Auto Summaries</h3>
          <p>Automatic report summaries save time and improve data analysis.</p>

          <h3>Sensor Integration</h3>
          <p>Integrate IoT sensors and monitoring devices for comprehensive coverage.</p>
        </section>

        <section className="sg-doc-section">
          <h2>Troubleshooting</h2>
          
          <h3>Dashboard Not Loading</h3>
          <p>If the dashboard doesn't load:</p>
          <ol>
            <li>Clear your browser cache</li>
            <li>Try a different browser</li>
            <li>Check your internet connection</li>
            <li>Contact support if the issue persists</li>
          </ol>

          <h3>Alerts Not Showing</h3>
          <p>Verify that:</p>
          <ul>
            <li>Your notification settings are enabled</li>
            <li>Sensors are properly configured</li>
            <li>System has internet connectivity</li>
          </ul>

          <h3>Permission Issues</h3>
          <p>If you can't access certain features, contact your administrator to verify your user permissions.</p>
        </section>

        <section className="sg-doc-section">
          <h2>API Documentation</h2>
          <p>Silent Guardian provides a REST API for integration with third-party systems.</p>
          <p>Base URL: <code>https://api.silentguardian.com/v1</code></p>
          <p>For API documentation and authentication details, please contact our support team.</p>
        </section>
      </div>
    </div>
  );
}
