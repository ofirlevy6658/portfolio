import React from "react";
import ReactTooltip from "react-tooltip";
import "./home.scss";

export const Home = () => {
	return (
		<div className="home-page">
			<div className="content">
				<div className="text">
					<h1>
						Hey, I'm <span>Ofir</span>
					</h1>
					<p>Full-Stack developer </p>
					<p>
						& <span>BSc in Computer Science </span>
					</p>
				</div>
				<div className="icons">
					<a
						href="https://drive.google.com/file/d/1f7cFpL__WiSbsTeAJeg1qYkTTNjwWFul/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
						data-tip
						data-for="c.v"
					>
						<i className="fas fa-file-alt fa-3x"></i>
					</a>
					<ReactTooltip
						id="c.v"
						type="dark"
						effect="solid"
						offset={{ top: 20 }}
					>
						<span>C.V</span>
					</ReactTooltip>
					<a
						href="https://github.com/ofirlevy6658"
						target="_blank"
						rel="noreferrer"
						data-tip
						data-for="github-profile"
					>
						<i className="fab fa-github fa-3x"></i>
					</a>
					<ReactTooltip
						id="github-profile"
						type="dark"
						effect="solid"
						offset={{ top: 20 }}
					>
						<span>Github Profile</span>
					</ReactTooltip>
					<a
						href="https://www.linkedin.com/in/ofirlevy6658/"
						target="_blank"
						rel="noreferrer"
						data-tip
						data-for="linkedin-profile"
					>
						<i className="fab fa-linkedin-in fa-3x"></i>
					</a>
					<ReactTooltip
						id="linkedin-profile"
						type="dark"
						effect="solid"
						offset={{ top: 20 }}
					>
						<span>Linkedin Profile</span>
					</ReactTooltip>
				</div>
			</div>
		</div>
	);
};
