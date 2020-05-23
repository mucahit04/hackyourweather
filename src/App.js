import React from "react";
import cityData from "./city-weather.json";

import "./App.css";
import CityItem from "./components/CityItem";

function App() {
	return (
		<div className='App'>
			<header className='App-header'> Weather</header>
			{cityData.map(cityItem => {
				return <CityItem key={cityItem.id} city={cityItem} />;
			})}
		</div>
	);
}

export default App;
