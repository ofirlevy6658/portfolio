import React from "react";
import ReactTooltip from "react-tooltip";
import { ProjectsData } from "../../data/type";

import "./card.scss";
interface Props {
	data: ProjectsData[];
}

export const Card = ({ data }: Props) => {
	const renderCards = data.map((el) => {
		return (
			<div key={el.name} className="card">
				<img className="project-img" src={el.img} alt={el.name} />
				<div className="info">
					<h1>{el.name}</h1>
					<p>{el.description}</p>
					<div className="icons">
						<a href={el.link} target="_blank" rel="noreferrer">
							<i
								data-tip
								data-for="website-link"
								className="far fa-window-maximize fa-2x"
							></i>
						</a>
						<a href={el.github} target="_blank" rel="noreferrer">
							<i
								data-tip
								data-for="github-repo"
								className="fab fa-github fa-2x"
							></i>
						</a>
						{el.architecture && (
							<a href={el.architecture} target="_blank" rel="noreferrer">
								<i
									data-tip
									data-for="architecture"
									className="fas fa-sitemap fa-2x"
								></i>
							</a>
						)}
					</div>
					<ReactTooltip id="website-link" type="dark" effect="solid">
						<span>My project</span>
					</ReactTooltip>
					<ReactTooltip id="github-repo" type="dark" effect="solid">
						<span>Github repo</span>
					</ReactTooltip>
					<ReactTooltip id="architecture" type="dark" effect="solid">
						<span>Architecture</span>
					</ReactTooltip>
				</div>
			</div>
		);
	});
	return <div className="cards">{renderCards}</div>;
};
