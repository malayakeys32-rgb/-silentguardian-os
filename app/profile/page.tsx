'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@silentguardian.com',
    phone: '+1 (555) 123-4567',
    department: 'Administration',
    role: 'Administrator',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile updated:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Profile Settings</h1>
        <Link href="/dashboard" className="sg-button">Back</Link>
      </div>

      <div className="sg-profile-container">
        <div className="sg-profile-card">
          <div className="sg-profile-header">
            <div className="sg-profile-avatar">👤</div>
            <div className="sg-profile-info">
              <h2>{formData.name}</h2>
              <p>{formData.role}</p>
              <p className="sg-profile-status">Active • Online</p>
            </div>
          </div>

          <div className="sg-profile-form">
            <h3>Account Information</h3>

            <div className="sg-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="sg-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="sg-form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="sg-form-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="sg-form-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange} disabled={!isEditing}>
                <option>Administrator</option>
                <option>Manager</option>
                <option>Operator</option>
                <option>Viewer</option>
              </select>
            </div>

            <div className="sg-profile-actions">
              {isEditing ? (
                <>
                  <button className="sg-button" onClick={handleSave}>Save Changes</button>
                  <button className="sg-button sg-button-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </>
              ) : (
                <button className="sg-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>

        <div className="sg-profile-card">
          <h3>Security Settings</h3>
          
          <div className="sg-settings-item">
            <div>
              <h4>Password</h4>
              <p>Change your account password</p>
            </div>
            <Link href="/profile/password" className="sg-button">
              Change Password
            </Link>
          </div>

          <div className="sg-settings-item">
            <div>
              <h4>Two-Factor Authentication</h4>
              <p>Add extra security to your account</p>
            </div>
            <Link href="/profile/security" className="sg-button">
              Enable 2FA
            </Link>
          </div>

          <div className="sg-settings-item">
            <div>
              <h4>Notification Preferences</h4>
              <p>Control how you receive alerts</p>
            </div>
            <Link href="/profile/notifications" className="sg-button">
              Configure
            </Link>
          </div>
        </div>

        <div className="sg-profile-card">
          <h3>Sessions</h3>
          <div className="sg-session-item">
            <div>
              <p className="sg-session-device">Chrome on Linux (Current)</p>
              <p className="sg-session-location">📍 Codespace - Last active now</p>
            </div>
            <span className="sg-badge">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
