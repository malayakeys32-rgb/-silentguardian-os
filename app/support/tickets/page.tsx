'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Ticket {
  id: string;
  subject: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  created: string;
  lastUpdate: string;
  category: string;
}

const mockTickets: Ticket[] = [
  {
    id: 'TKT-001',
    subject: 'Dashboard not displaying alerts',
    status: 'in-progress',
    priority: 'high',
    created: '2026-08-30',
    lastUpdate: '2026-09-01',
    category: 'Technical',
  },
  {
    id: 'TKT-002',
    subject: 'Need API documentation',
    status: 'open',
    priority: 'medium',
    created: '2026-08-31',
    lastUpdate: '2026-08-31',
    category: 'Documentation',
  },
  {
    id: 'TKT-003',
    subject: 'Feature request: Export reports to PDF',
    status: 'open',
    priority: 'low',
    created: '2026-08-29',
    lastUpdate: '2026-08-29',
    category: 'Feature Request',
  },
  {
    id: 'TKT-004',
    subject: 'Account permissions issue',
    status: 'resolved',
    priority: 'high',
    created: '2026-08-20',
    lastUpdate: '2026-08-28',
    category: 'Account',
  },
];

export default function TicketsPage() {
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved'>('all');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = filter === 'all' 
    ? mockTickets 
    : mockTickets.filter(t => t.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return '#ff6b6b';
      case 'in-progress': return '#ffd43b';
      case 'resolved': return '#51cf66';
      default: return '#888';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffd43b';
      case 'low': return '#51cf66';
      default: return '#888';
    }
  };

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Support Tickets</h1>
        <Link href="/support/tickets/new" className="sg-button">
          Create New Ticket
        </Link>
      </div>

      <div className="sg-support-container">
        <div className="sg-tickets-list">
          <div className="sg-filter-buttons">
            {['all', 'open', 'in-progress', 'resolved'].map((status) => (
              <button
                key={status}
                className={`sg-filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status as any)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="sg-tickets">
            {filteredTickets.length === 0 ? (
              <div className="sg-empty-state">
                <p>No tickets found</p>
              </div>
            ) : (
              filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`sg-ticket-item ${selectedTicket?.id === ticket.id ? 'active' : ''}`}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <div className="sg-ticket-header">
                    <span className="sg-ticket-id">{ticket.id}</span>
                    <span className="sg-ticket-status" style={{ color: getStatusColor(ticket.status) }}>
                      {ticket.status}
                    </span>
                  </div>
                  <h3>{ticket.subject}</h3>
                  <div className="sg-ticket-meta">
                    <span style={{ color: getPriorityColor(ticket.priority) }}>
                      {ticket.priority.toUpperCase()}
                    </span>
                    <span>{ticket.category}</span>
                    <span>{ticket.lastUpdate}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="sg-ticket-details">
          {selectedTicket ? (
            <div className="sg-detail-panel">
              <div className="sg-detail-header">
                <h2>{selectedTicket.subject}</h2>
                <div className="sg-detail-badges">
                  <span style={{ color: getStatusColor(selectedTicket.status) }}>
                    Status: {selectedTicket.status}
                  </span>
                  <span style={{ color: getPriorityColor(selectedTicket.priority) }}>
                    Priority: {selectedTicket.priority}
                  </span>
                </div>
              </div>

              <div className="sg-detail-info">
                <p><strong>Ticket ID:</strong> {selectedTicket.id}</p>
                <p><strong>Category:</strong> {selectedTicket.category}</p>
                <p><strong>Created:</strong> {selectedTicket.created}</p>
                <p><strong>Last Updated:</strong> {selectedTicket.lastUpdate}</p>
              </div>

              <div className="sg-detail-messages">
                <h3>Messages</h3>
                <div className="sg-message-thread">
                  <div className="sg-message">
                    <div className="sg-message-author">You - {selectedTicket.created}</div>
                    <div className="sg-message-body">
                      I'm experiencing issues with the dashboard alerts not displaying. Can you help?
                    </div>
                  </div>
                  {selectedTicket.status !== 'open' && (
                    <div className="sg-message">
                      <div className="sg-message-author">Support Team - {selectedTicket.lastUpdate}</div>
                      <div className="sg-message-body">
                        Thank you for reporting this. We're investigating the issue. Please check your browser cache and clear it.
                      </div>
                    </div>
                  )}
                </div>
                {selectedTicket.status !== 'resolved' && (
                  <div className="sg-reply-box">
                    <textarea placeholder="Add a reply..."></textarea>
                    <button
                      type="button"
                      className="sg-button"
                      onClick={() => alert('Reply sent successfully!')}
                    >
                      Send Reply
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="sg-empty-state">
              <p>Select a ticket to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
