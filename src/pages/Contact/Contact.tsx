import React from "react";
import "./contact.scss";
interface Props {}

export const Contact = (props: Props) => {
	return (
		<div className="contact-page">
			<h1>Ofir Levy</h1>
			<h2>ofirlevy6658@gmail.com</h2>
			<div className="icons">
				<a
					href="https://drive.google.com/file/d/1f7cFpL__WiSbsTeAJeg1qYkTTNjwWFul/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-file-alt fa-2x"></i>
				</a>
				<a
					href="https://github.com/ofirlevy6658"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-github fa-2x"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/ofirlevy6658/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-linkedin-in fa-2x"></i>
				</a>
			</div>
		</div>
	);
};
