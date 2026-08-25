import React from "react";

type FentanylAlertCardProps = {
	location: string;
	description: string;
	createdAt: string | Date;
};

export default function FentanylAlertCard({
	location,
	description,
	createdAt,
}: FentanylAlertCardProps) {
	return (
		<div className="sg-card-item sg-card-warning-item">
			<h3 className="sg-card-title">{location}</h3>
			<p className="sg-card-desc">{description}</p>
			<span className="sg-card-time">
				{new Date(createdAt).toLocaleString()}
			</span>
		</div>
	);
}

