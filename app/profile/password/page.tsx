'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PasswordSettingsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Password Settings</h1>
        <Link href="/profile" className="sg-button">Back</Link>
      </div>

      <div className="sg-profile-card" style={{ maxWidth: 700 }}>
        <form
          className="sg-profile-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="sg-form-group">
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" required />
          </div>

          <div className="sg-form-group">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" required />
          </div>

          <div className="sg-form-group">
            <label>Confirm New Password</label>
            <input type="password" placeholder="Confirm new password" required />
          </div>

          <div className="sg-profile-actions">
            <button type="submit" className="sg-button">Update Password</button>
          </div>

          {submitted && <p className="sg-form-hint">Password updated successfully.</p>}
        </form>
      </div>
    </div>
  );
}
