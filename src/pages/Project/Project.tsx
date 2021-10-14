import React from "react";
import { Card } from "../../components/Card/Card";
import { projectsData } from "../../data/data";

import "./project.scss";
interface Props {}

export const Project = (props: Props) => {
	return (
		<div className="project-page">
			<h1>Projects</h1>
			<div className="card-container">
				<Card data={projectsData} />
			</div>
		</div>
	);
};
