import React from "react";
import profileImg from "../../media/profile-img.jpeg";

import "./about.scss";

interface Props {}

export const About = (props: Props) => {
	return (
		<div className="about-page">
			<div className="header">
				<h1>About</h1>
			</div>
			<div className="center">
				<div className="content">
					<h1>About me</h1>
					<p>Hey, My name is Ofir and I'm 26</p>
					<p>I have BSc in Computer Science</p>
					<h3>Technologies</h3>
					<div className="icon-skills">
						<div>
							<img
								src="https://img.icons8.com/color/48/000000/javascript--v2.png"
								alt="js"
							/>
							<img
								src="https://img.icons8.com/color/48/000000/typescript.png"
								alt="ts"
							/>
							<img
								src="https://img.icons8.com/color/48/000000/html-5--v1.png"
								alt="html5"
							/>
							<img
								src="https://img.icons8.com/color/48/000000/css3.png"
								alt="css3"
							/>
						</div>
						<img src="https://img.icons8.com/office/40/000000/react.png" />
						<img src="https://img.icons8.com/color/48/000000/nodejs.png" />
						<img src="https://img.icons8.com/color/48/000000/git.png" />
						<img src="https://img.icons8.com/color/48/000000/docker.png" />
						<img src="https://img.icons8.com/color/48/000000/firebase.png" />
						<img src="https://img.icons8.com/color/48/000000/mongodb.png" />
					</div>
				</div>

				<img className="profile-img" src={profileImg} alt="profile" />
			</div>
		</div>
	);
};
