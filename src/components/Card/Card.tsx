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
				<img src={el.img} alt="" />
			</div>
		);
	});
	return <div className="cards">{renderCards}</div>;
};
