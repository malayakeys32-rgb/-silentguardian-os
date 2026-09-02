'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqItems = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to the login page and click "Forgot Password". You\'ll receive an email with instructions.',
  },
  {
    question: 'How can I create a support ticket?',
    answer: 'Navigate to Support > Tickets and click "Create New Ticket". Fill out the form with your issue details.',
  },
  {
    question: 'What is the response time for support tickets?',
    answer: 'We typically respond to tickets within 2-4 hours during business hours. Priority issues are handled faster.',
  },
  {
    question: 'How do I export reports?',
    answer: 'Open any report and click the export button. You can download as PDF or CSV format.',
  },
  {
    question: 'Can I change my account settings?',
    answer: 'Yes, go to your profile settings to update email, password, and notification preferences.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, all data is encrypted with military-grade encryption and stored securely.',
  },
];

const supportChannels = [
  {
    icon: '🎫',
    title: 'Support Tickets',
    description: 'Create and track support tickets for technical issues',
    link: '/support/tickets',
  },
  {
    icon: '✉️',
    title: 'Email & Messages',
    description: 'View all emails and system messages',
    link: '/support/messages',
  },
  {
    icon: '📚',
    title: 'Documentation',
    description: 'Access complete guides and tutorials',
    link: '/support/docs',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Chat with support team in real-time',
    link: '/support/tickets/new',
  },
];

export default function SupportPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <h1>Help & Support Center</h1>
        <p>Get assistance with your account and resolve issues quickly</p>
      </div>

      {/* Support Channels */}
      <section className="sg-section">
        <h2>Support Channels</h2>
        <div className="sg-channels-grid">
          {supportChannels.map((channel, idx) => (
            <Link
              key={idx}
              href={channel.link}
              className="sg-channel-card"
            >
              <div className="sg-channel-icon">{channel.icon}</div>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="sg-section">
        <h2>Support Status</h2>
        <div className="sg-stats-grid">
          <div className="sg-stat-box">
            <div className="sg-stat-number">2</div>
            <div className="sg-stat-label">Open Tickets</div>
          </div>
          <div className="sg-stat-box">
            <div className="sg-stat-number">1</div>
            <div className="sg-stat-label">In Progress</div>
          </div>
          <div className="sg-stat-box">
            <div className="sg-stat-number">4</div>
            <div className="sg-stat-label">Resolved</div>
          </div>
          <div className="sg-stat-box">
            <div className="sg-stat-number">2</div>
            <div className="sg-stat-label">Unread Messages</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sg-section">
        <h2>Frequently Asked Questions</h2>
        <div className="sg-faq">
          {faqItems.map((item, idx) => (
            <div key={idx} className="sg-faq-item">
              <button
                className="sg-faq-question"
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
              >
                <span>{item.question}</span>
                <span className="sg-faq-toggle">
                  {expandedFAQ === idx ? '−' : '+'}
                </span>
              </button>
              {expandedFAQ === idx && (
                <div className="sg-faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="sg-section">
        <h2>Get in Touch</h2>
        <div className="sg-contact-box">
          <p>
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="sg-contact-info">
            <p>
              <strong>Email:</strong> support@silentguardian.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>
          <Link href="/support/tickets/new" className="sg-button">
            Create Support Ticket
          </Link>
        </div>
      </section>
    </div>
  );
}
