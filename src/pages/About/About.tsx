import React from "react";
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
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis
						sequi vitae velit optio esse animi aspernatur earum veniam expedita
						vel quae excepturi, id praesentium aliquid sapiente ipsum
						voluptatibus beatae possimus nihil obcaecati dolores! Vitae
						doloribus explicabo perspiciatis quisquam facilis, ad reiciendis
						porro nulla est voluptatem? Facere quos nisi temporibus.
					</h3>
					<h3>Technologies</h3>
					<div className="icon-skills">
						<div>
							<img src="https://img.icons8.com/color/48/000000/javascript--v2.png" />
							<img src="https://img.icons8.com/color/48/000000/typescript.png" />
							<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
							<img src="https://img.icons8.com/color/48/000000/css3.png" />
						</div>
						<img src="https://img.icons8.com/office/40/000000/react.png" />
						<img src="https://img.icons8.com/color/48/000000/nodejs.png" />
						<img src="https://img.icons8.com/color/48/000000/git.png" />
						<img src="https://img.icons8.com/color/48/000000/docker.png" />
					</div>
				</div>

				<img
					className="profile-img"
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
					alt="profile"
				/>
			</div>
		</div>
	);
};
