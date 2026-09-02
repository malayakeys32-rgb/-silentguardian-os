'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SecuritySettingsPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Security Settings</h1>
        <Link href="/profile" className="sg-button">Back</Link>
      </div>

      <div className="sg-profile-card" style={{ maxWidth: 700 }}>
        <div className="sg-settings-item">
          <div>
            <h4>Two-Factor Authentication</h4>
            <p>{enabled ? 'Enabled for your account' : 'Not enabled yet'}</p>
          </div>
          <button type="button" className="sg-button" onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Disable 2FA' : 'Enable 2FA'}
          </button>
        </div>

        <div className="sg-settings-item">
          <div>
            <h4>Session Management</h4>
            <p>Review connected devices and active sessions</p>
          </div>
          <Link href="/profile" className="sg-button">Manage Sessions</Link>
        </div>
      </div>
    </div>
  );
}
