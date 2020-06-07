import React from "react";

export default function CityItem({ city, handleDelete, error }) {
	const name = city.name;
	const sys = city.sys;
	const weather = city.weather;
	const main = city.main;
	const coord = city.coord;
	return (
		<div>
			<h2>
				{name}, {sys.country}
				<button className='eraseBtn' onClick={() => handleDelete(city.id)}>
					<i className='fa fa-times-circle'></i>
				</button>
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
