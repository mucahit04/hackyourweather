import React from "react";
import Search from "./components/Search";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'> HackYourWeather</header>
			<div className='main-div'>
				<Search />
			</div>
		</div>
	);
}

export default App;
