'use client';

import Link from "next/link";
import { useState } from "react";

export default function TopNav() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="sg-topnav">
      <div className="sg-topnav-left">
        <h2 className="sg-topnav-title">Silent Guardian Control Center</h2>
      </div>

      <div className="sg-topnav-right">
        {/* Notifications Bell */}
        <div className="sg-topnav-item">
          <button
            className="sg-topnav-button"
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            aria-label="Notifications"
          >
            <span className="sg-icon">🔔</span>
            <span className="sg-badge">3</span>
          </button>
          {isNotificationsOpen && (
            <div className="sg-dropdown">
              <div className="sg-dropdown-item">Alert System Status</div>
              <div className="sg-dropdown-item">New Report Submitted</div>
              <div className="sg-dropdown-item">Customer Message Received</div>
              <Link href="/support/messages" className="sg-dropdown-link">
                View All Messages →
              </Link>
            </div>
          )}
        </div>

        {/* Email Icon */}
        <div className="sg-topnav-item">
          <Link href="/support/messages" className="sg-topnav-button" title="Email & Messages">
            <span className="sg-icon">✉️</span>
            <span className="sg-badge">2</span>
          </Link>
        </div>

        {/* Help Icon */}
        <div className="sg-topnav-item">
          <Link href="/support" className="sg-topnav-button" title="Help & Support">
            <span className="sg-icon">❓</span>
          </Link>
        </div>

        {/* User Menu */}
        <div className="sg-topnav-item">
          <button
            className="sg-topnav-user"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            aria-label="User Menu"
          >
            <span className="sg-avatar">👤</span>
            <span className="sg-username">Admin</span>
          </button>
          {isUserMenuOpen && (
            <div className="sg-dropdown">
              <Link href="/profile" className="sg-dropdown-item">Profile Settings</Link>
              <Link href="/support/tickets" className="sg-dropdown-item">My Tickets</Link>
              <div className="sg-dropdown-divider"></div>
              <Link href="/logout" className="sg-dropdown-item">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
