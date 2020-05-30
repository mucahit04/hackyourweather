import React from "react";
import CityItem from "./CityItem";
import { useState } from "react";

export default function Search() {
	const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [cityName, setCityName] = useState("");
	const [cityData, setCityData] = useState({});

	const fetchCityWeather = async () => {
		setLoading(true);
		try {
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
			const res = await fetch(apiUrl);
			if (!res.ok) {
				setError(true);
				setLoading(false);
			} else {
				const data = await res.json();
				setCityData(data);
				setLoading(false);
				setError(false);
			}
		} catch (error) {
			setError(true);
		}
	};
	const handleSubmit = e => {
		e.preventDefault();
		fetchCityWeather();
	};

	return (
		<>
			<div className='search-div'>
				{!cityData.name && <p>Type a city name and search for the weather</p>}
				{isLoading && <p>Loading..</p>}
				<form onSubmit={handleSubmit} className='form'>
					<input
						type='text'
						className='input'
						value={cityName}
						onChange={event => {
							let value = event.target.value;
							setCityName(value);
						}}
					/>
					<input className='button' type='submit' value='Search' />
				</form>

				{error && !isLoading && <p>Fetch error!</p>}
				{!isLoading && !error && cityData.name && (
					<div className='city-item'>
						<CityItem cityData={cityData} />
					</div>
				)}
			</div>
		</>
	);
}
