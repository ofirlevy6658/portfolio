import gameRecImg from "../media/game-recognition.png";
import sreamifyImg from "../media/sreamify.png";
import weatherImg from "../media/weather.png";
import minecraft2d from "../media/minecraft2d.png";

export const projectsData = [
	{
		name: "Song Pop",
		description:
			"Full stack web-app built using React, Node.js and Mongodb. Including registration, authentication and user management.",
		link: "https://game-recognition-app.herokuapp.com/",
		github: "https://github.com/ofirlevy6658/song-recognition-game",
		img: gameRecImg,
	},
	{
		name: "Music player",
		description:
			"React TS/Redux thunk based web application,provide streaming service with a cool sound player.utilizes Spotify API.",
		link: "https://stream-ofiy.netlify.app/",
		github: "https://github.com/ofirlevy6658/music",
		img: sreamifyImg,
	},
	{
		name: "Minecraft 2d",
		description: "Minecraft 2d built using VanillaJS",
		link: "https://minecraft-2d-ofirlevy.netlify.app/",
		github: "https://github.com/ofirlevy6658/Minecraft-2d",
		img: minecraft2d,
	},
	{
		name: "Weather app",
		description:
			"React TS/Redux thunk based web application,provide weather service,including dark-mode, favorites and auto complete",
		link: "https://weather-app-ofir.netlify.app/",
		github: "https://github.com/ofirlevy6658/Ofir-Levy-16-08-2021",
		img: weatherImg,
	},
];
