"use client";

import React, { useState } from "react";

type ReportFormProps = {
	onSubmit: (report: { title: string; description: string }) => void;
};

export default function ReportForm({ onSubmit }: ReportFormProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onSubmit({ title, description });
		setTitle("");
		setDescription("");
	}

	return (
		<form onSubmit={handleSubmit} className="sg-form">
			<input
				className="sg-input"
				placeholder="Report Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<textarea
				className="sg-textarea"
				placeholder="Describe the incident"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			<button className="sg-button">Submit Report</button>
		</form>
	);
}

