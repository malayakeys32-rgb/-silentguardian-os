'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState({
    alerts: true,
    emails: true,
    reports: true,
    updates: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Notification Preferences</h1>
        <Link href="/profile" className="sg-button">Back</Link>
      </div>

      <div className="sg-profile-card" style={{ maxWidth: 700 }}>
        <div className="sg-settings-item">
          <div>
            <h4>Critical Alerts</h4>
            <p>Emergency and incident notifications</p>
          </div>
          <button type="button" className="sg-button" onClick={() => toggle('alerts')}>
            {settings.alerts ? 'On' : 'Off'}
          </button>
        </div>

        <div className="sg-settings-item">
          <div>
            <h4>Email Updates</h4>
            <p>Product updates and status emails</p>
          </div>
          <button type="button" className="sg-button" onClick={() => toggle('emails')}>
            {settings.emails ? 'On' : 'Off'}
          </button>
        </div>

        <div className="sg-settings-item">
          <div>
            <h4>Report Notifications</h4>
            <p>Updates on case and report activity</p>
          </div>
          <button type="button" className="sg-button" onClick={() => toggle('reports')}>
            {settings.reports ? 'On' : 'Off'}
          </button>
        </div>

        <div className="sg-settings-item">
          <div>
            <h4>System Updates</h4>
            <p>Maintenance and feature release notices</p>
          </div>
          <button type="button" className="sg-button" onClick={() => toggle('updates')}>
            {settings.updates ? 'On' : 'Off'}
          </button>
        </div>
      </div>
    </div>
  );
}
