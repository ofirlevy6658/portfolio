import React from "react";
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
							<i className="far fa-window-maximize fa-2x"></i>
						</a>
						<a href={el.github} target="_blank" rel="noreferrer">
							<i className="fab fa-github fa-2x"></i>
						</a>
					</div>
				</div>
			</div>
		);
	});
	return <div className="cards">{renderCards}</div>;
};
