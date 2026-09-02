'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
  type: 'email' | 'support';
}

const mockMessages: Message[] = [
  {
    id: '1',
    from: 'support@silentguardian.com',
    subject: 'Your support ticket TKT-001 has been updated',
    preview: 'Our technical team is investigating your dashboard alert issue...',
    date: '2026-09-01 10:30 AM',
    isRead: false,
    type: 'support',
  },
  {
    id: '2',
    from: 'billing@silentguardian.com',
    subject: 'Invoice for September 2026',
    preview: 'Your monthly invoice is now available for download...',
    date: '2026-09-01 09:15 AM',
    isRead: false,
    type: 'email',
  },
  {
    id: '3',
    from: 'system@silentguardian.com',
    subject: 'System maintenance scheduled',
    preview: 'We will perform scheduled maintenance on September 5th...',
    date: '2026-08-31 3:45 PM',
    isRead: true,
    type: 'email',
  },
  {
    id: '4',
    from: 'team@silentguardian.com',
    subject: 'Welcome to Silent Guardian',
    preview: 'Thank you for joining Silent Guardian. Here\'s how to get started...',
    date: '2026-08-28 1:20 PM',
    isRead: true,
    type: 'email',
  },
];

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredMessages = filter === 'unread'
    ? mockMessages.filter(m => !m.isRead)
    : mockMessages;

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Email & Messages</h1>
        <Link href="/support/tickets/new" className="sg-button">
          Compose New Email
        </Link>
      </div>

      <div className="sg-messages-container">
        <div className="sg-messages-list">
          <div className="sg-messages-filters">
            <button
              className={`sg-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Messages
            </button>
            <button
              className={`sg-filter-btn ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({mockMessages.filter(m => !m.isRead).length})
            </button>
          </div>

          <div className="sg-messages">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`sg-message-item ${!message.isRead ? 'unread' : ''} ${
                  selectedMessage?.id === message.id ? 'active' : ''
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="sg-message-avatar">
                  {message.from.charAt(0).toUpperCase()}
                </div>
                <div className="sg-message-content">
                  <div className="sg-message-from">{message.from}</div>
                  <div className="sg-message-subject">{message.subject}</div>
                  <div className="sg-message-preview">{message.preview}</div>
                </div>
                <div className="sg-message-date">{message.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sg-message-viewer">
          {selectedMessage ? (
            <div className="sg-message-full">
              <div className="sg-message-full-header">
                <div>
                  <h2>{selectedMessage.subject}</h2>
                  <p className="sg-message-full-from">From: {selectedMessage.from}</p>
                  <p className="sg-message-full-date">{selectedMessage.date}</p>
                </div>
                <div className="sg-message-actions">
                  <button
                    type="button"
                    className="sg-icon-btn"
                    title="Reply"
                    onClick={() => alert('Reply draft opened.')}
                  >
                    ↩️
                  </button>
                  <button
                    type="button"
                    className="sg-icon-btn"
                    title="Archive"
                    onClick={() => alert('Message archived.')}
                  >
                    📦
                  </button>
                  <button
                    type="button"
                    className="sg-icon-btn"
                    title="Delete"
                    onClick={() => {
                      alert('Message deleted.');
                      setSelectedMessage(null);
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <div className="sg-message-full-body">
                {selectedMessage.type === 'support' ? (
                  <>
                    <p>Dear User,</p>
                    <p>{selectedMessage.preview}</p>
                    <p>Our team is working on resolving your issue and will provide an update within 24 hours.</p>
                    <p>In the meantime, you can:</p>
                    <ul>
                      <li>Check the documentation at our help center</li>
                      <li>Review similar issues in our knowledge base</li>
                      <li>Contact support for immediate assistance</li>
                    </ul>
                    <p>Best regards,<br />Silent Guardian Support Team</p>
                  </>
                ) : (
                  <>
                    <p>Dear User,</p>
                    <p>{selectedMessage.preview}</p>
                    <p>Thank you for using Silent Guardian.</p>
                    <p>Best regards,<br />Silent Guardian Team</p>
                  </>
                )}
              </div>

              <div className="sg-message-full-footer">
                {selectedMessage.type === 'support' && (
                  <Link href={`/support/tickets`} className="sg-button">
                    View Related Ticket
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="sg-empty-state">
              <p>Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
