import React from "react";
import cityData from "./city-weather.json";

import "./App.css";
import CityItem from "./components/CityItem";

function App() {
	return (
		<div className='App'>
			<header className='App-header'> Weather</header>
			{cityData.map((cityItem, index) => {
				return <CityItem key={cityItem.id} cityName={cityItem.name} country={cityItem.sys.country} weatherMain={cityItem.weather[0].main} weatherDesc={cityItem.weather[0].description} latitude={cityItem.coord.lat} longitude={cityItem.coord.lon} temp_min={cityItem.main.temp_min} temp_max={cityItem.main.temp_max}
        
        />;
			})}
		</div>
	);
}

export default App;
