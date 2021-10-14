import React from "react";
// import { Radio } from "semantic-ui-react";
import { Link } from "react-scroll";
import myIcon from "../../media/my-icon.jpeg";
import "./navBar.scss";

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="icon">
				<Link
					to={"home-page"}
					spy
					smooth
					hashSpy
					duration={500}
					isDynamic={true}
				>
					<img src={myIcon} alt="icon" />
				</Link>
			</div>
			<div className="sections">
				<Link
					activeClass="active"
					to={"about-page"}
					spy
					smooth
					hashSpy
					duration={500}
					isDynamic={true}
				>
					<span>About</span>
				</Link>
				<Link
					activeClass="active"
					to={"project-page"}
					spy
					smooth
					hashSpy
					offset={-60}
					duration={500}
					isDynamic={true}
				>
					<span>Projects</span>
				</Link>
				<Link
					activeClass="active"
					to={"contact-page"}
					spy
					smooth
					hashSpy
					offset={150}
					duration={500}
					isDynamic={true}
				>
					<span>Contact</span>
				</Link>
			</div>
		</div>
	);
};
