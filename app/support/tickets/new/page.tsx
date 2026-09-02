'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  'Technical Issue',
  'Feature Request',
  'Account',
  'Documentation',
  'Billing',
  'Other',
];

const priorities = ['low', 'medium', 'high'];

export default function NewTicketPage() {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'Technical Issue',
    priority: 'medium',
    description: '',
    attachments: [] as File[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting ticket:', formData);
    // TODO: Send to API
    alert('Ticket submitted successfully!');
  };

  return (
    <div className="sg-page">
      <div className="sg-page-header">
        <div>
          <h1>Create New Support Ticket</h1>
          <p>Describe your issue and we'll help you resolve it</p>
        </div>
        <Link href="/support/tickets" className="sg-button">
          Back to Tickets
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="sg-form-container">
        <div className="sg-form-section">
          <h2>Ticket Details</h2>

          <div className="sg-form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Brief description of your issue"
              required
              maxLength={100}
            />
            <span className="sg-form-hint">{formData.subject.length}/100</span>
          </div>

          <div className="sg-form-row">
            <div className="sg-form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="sg-form-group">
              <label htmlFor="priority">Priority *</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                required
              >
                {priorities.map(pri => (
                  <option key={pri} value={pri}>
                    {pri.charAt(0).toUpperCase() + pri.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sg-form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please provide detailed information about your issue"
              required
              minLength={20}
              maxLength={5000}
              rows={8}
            />
            <span className="sg-form-hint">{formData.description.length}/5000 characters</span>
          </div>
        </div>

        <div className="sg-form-section">
          <h2>Additional Information</h2>

          <div className="sg-form-group">
            <label htmlFor="attachments">Attachments (Optional)</label>
            <div className="sg-file-upload">
              <input
                type="file"
                id="attachments"
                multiple
                accept=".pdf,.jpg,.png,.gif,.doc,.docx,.txt"
              />
              <p>Drag files here or click to browse</p>
              <span className="sg-form-hint">Max file size: 10MB per file (PDF, JPG, PNG, etc.)</span>
            </div>
          </div>
        </div>

        <div className="sg-form-actions">
          <button type="submit" className="sg-button">
            Create Ticket
          </button>
          <Link href="/support/tickets" className="sg-button sg-button-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
