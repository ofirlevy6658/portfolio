import React from "react";
import { Radio } from "semantic-ui-react";

import "./navBar.scss";
import myIcon from "../../media/my-icon.jpeg";
interface Props {}

export const NavBar = (props: Props) => {
	return (
		<div className="navbar-container">
			<div className="icon">
				<img src={myIcon} alt="icon" />
			</div>
			<div className="sections">
				<span>About</span>
				<span>Projects</span>
				<span>Contact</span>
				<Radio toggle onChange={() => console.log("Test")} />
			</div>
		</div>
	);
};
