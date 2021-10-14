import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Project } from "./pages/Project/Project";
import { NavBar } from "./components/NavBar/NavBar";
import { Contact } from "./pages/Contact/Contact";
import "./reset.scss";

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<About />
			<Project />
			<Contact />
		</>
	);
}

export default App;
