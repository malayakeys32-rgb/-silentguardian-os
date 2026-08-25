import React from "react";

type AlertCardProps = {
	title: string;
	description: string;
	createdAt: string | Date;
};

export default function AlertCard({
	title,
	description,
	createdAt,
}: AlertCardProps) {
	return (
		<div className="sg-card-item">
			<h3 className="sg-card-title">{title}</h3>
			<p className="sg-card-desc">{description}</p>
			<span className="sg-card-time">
				{new Date(createdAt).toLocaleString()}
			</span>
		</div>
	);
}

