import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import "./reset.scss";

function App() {
	return (
		<>
			<Home />
			<About />
		</>
	);
}

export default App;
