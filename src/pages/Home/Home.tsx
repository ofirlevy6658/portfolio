import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";

import "./home.scss";
interface Props {}

export const Home = (props: Props) => {
	return (
		<div className="home-page">
			<NavBar />
			<div className="content">
				<div className="text">
					<h1>Ofir Levy</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<button>About me</button>
				</div>
				<div className="icons">
					<a
						href="https://drive.google.com/file/d/1f7cFpL__WiSbsTeAJeg1qYkTTNjwWFul/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fas fa-paperclip fa-3x"></i>
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
