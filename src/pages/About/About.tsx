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
				<h3 className="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis
					sequi vitae velit optio esse animi aspernatur earum veniam expedita
					vel quae excepturi, id praesentium aliquid sapiente ipsum voluptatibus
					beatae possimus nihil obcaecati dolores! Vitae doloribus explicabo
					perspiciatis quisquam facilis, ad reiciendis porro nulla est
					voluptatem? Facere quos nisi temporibus.
				</h3>
				<img
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
					alt="profile"
				/>
			</div>
		</div>
	);
};
