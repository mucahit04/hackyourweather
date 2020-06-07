import React from "react";
import CityItem from "./CityItem";
import { useState } from "react";

export default function Search() {
	const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [cityName, setCityName] = useState("");
	const [cityList, setCityList] = useState([]);

	const fetchCityWeather = async apiUrl => {
		setLoading(true);
		try {
			const res = await fetch(apiUrl);
			if (!res.ok) {
				setError(true);
				setLoading(false);
			} else {
				const data = await res.json();
				const uniqeCities = cityList.filter(city => city.id !== data.id);
				setCityList([data, ...uniqeCities]);

				// setCityList(cityList => [...cityList, data]);
				setLoading(false);
				setError(false);
			}
		} catch (error) {
			setError(true);
		}
		return { isLoading, error, cityList };
	};

	const handleDelete = id => {
		const newCityList = cityList.filter(city => city.id !== id);
		setCityList(newCityList);
	};

	return (
		<>
			<div className='search-div'>
				{!cityList.length !== 0 && <p>Type a city name and search for the weather</p>}
				{isLoading && <p>Loading..</p>}
				<form
					onSubmit={e => {
						e.preventDefault();
						fetchCityWeather(
							`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
						);
					}}
					className='form'
				>
					<input
						type='text'
						className='input'
						value={cityName}
						onChange={event => {
							let value = event.target.value;
							setCityName(value);
						}}
					/>
					<input className='button' type='submit' value='Search' disabled={cityName.length === 0} />
				</form>

				{error && !isLoading && <p>Couldn't get data! Please refresh the page and try again.</p>}
				{cityList.map(city => (
					<div key={city.id} className='city-item'>
						<CityItem city={city} handleDelete={handleDelete} error={error} />
					</div>
				))}
			</div>
		</>
	);
}
