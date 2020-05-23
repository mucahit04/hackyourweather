import React from "react";

export default function CityItem({ city }) {
	const { name, sys, weather, main, coord } = city;
	return (
		<div className='city-item'>
			<h2>
				{name}, {sys.country}
			</h2>
			<div className='weather-desc'>
				<p className='bold'>{weather[0].main}</p>
				<p>{weather[0].description}</p>
			</div>
			<ul>
				<li>min temp: {main.temp_min}</li>
				<li>max temp: {main.temp_max}</li>
				<li>
					location: {coord.lat}, {coord.lon}
				</li>
			</ul>
		</div>
	);
}
