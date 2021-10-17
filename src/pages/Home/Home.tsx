import React from "react";

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
					{/* <button className="btn">About me</button> */}
				</div>
				<div className="icons">
					<a
						href="https://drive.google.com/file/d/1f7cFpL__WiSbsTeAJeg1qYkTTNjwWFul/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fas fa-file-alt fa-3x"></i>
					</a>
					<a
						href="https://github.com/ofirlevy6658"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-github fa-3x"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/ofirlevy6658/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin-in fa-3x"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
