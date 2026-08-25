"use client";

import { useState, type FormEvent } from "react";

export default function ReportsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submitReport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });

    setStatus(res.ok ? "Report submitted." : "Error submitting report.");
    if (res.ok) {
      setTitle("");
      setDescription("");
    }
  }

  return (
    <main className="sg-reports">
      <h2>Submit Incident Report</h2>
      <form onSubmit={submitReport} className="sg-form">
        <input className="sg-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea className="sg-textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe what happened" />
        <button className="sg-button">Submit</button>
      </form>
      {status && <p className="sg-status">{status}</p>}
    </main>
  );
}

