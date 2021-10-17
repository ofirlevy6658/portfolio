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
					<p>
						Full-Stack developer & BSc in Computer Science experienced in
						JavaScript, React, Node.js among other technologies. Curious and
						innovative.
					</p>
					<h1>My skills</h1>
					<div className="skills-icons">
						<img
							src="https://img.shields.io/badge/HTML5-003d4d?logo=HTML5&amp;logoColor=E34F26"
							alt="HTML5"
							title="HTML5"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/CSS3-003d4d?logo=CSS3&amp;logoColor=1572B6"
							alt="CSS3"
							title="CSS3"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Sass-003d4d?logo=Sass&amp;logoColor=CC6699"
							alt="Sass"
							title="Sass"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/JavaScript-003d4d?logo=JavaScript&amp;logoColor=F7DF1E"
							alt="JavaScript"
							title="JavaScript"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/TypeScript-003d4d?logo=TypeScript&amp;logoColor=3178C6"
							alt="TypeScript"
							title="TypeScript"
							height="30"
						/>
						<hr />
						<img
							src="https://img.shields.io/badge/React-003d4d?logo=React&amp;logoColor=61DAFB"
							alt="React"
							title="React"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Redux-003d4d?logo=Redux&amp;logoColor=764ABC"
							alt="Redux"
							title="Redux"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Node.js-003d4d?logo=Node.js&amp;logoColor="
							alt="Node.js"
							title="Node.js"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Express-003d4d?logo=Express&amp;logoColor=FFFFFF"
							alt="Express"
							title="Express"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/MongoDB-003d4d?logo=MongoDB&amp;logoColor=47A248"
							alt="MongoDB"
							title="MongoDB"
							height="30"
						/>
						<hr />
						<img
							src="https://img.shields.io/badge/Git-003d4d?logo=Git&amp;logoColor=F05032"
							alt="Git"
							title="Git"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Firebase-003d4d?logo=Firebase&amp;logoColor=FFCA28"
							alt="Firebase"
							title="Firebase"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/Docker-003d4d?logo=Docker&logoColor=0db7ed"
							alt="Docker"
							title="Docker"
							height="30"
						/>
						<img
							src="https://img.shields.io/badge/VS Code-003d4d?logo=visual studio code&amp;logoColor=007ACC"
							alt="visual studio code"
							title="visual studio code"
							height="30"
						></img>
					</div>
				</div>

				<img className="profile-img" src={profileImg} alt="profile" />
			</div>
		</div>
	);
};
