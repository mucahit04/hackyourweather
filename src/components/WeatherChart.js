import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function WeatherChart({ match }) {
	const [cityList, setCityList] = useState([]);
	const [cityName, setCityname] = useState();
	const [isError, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
	const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&units=metric&appid=${API_KEY}`;

	useEffect(() => {
		const getForecastGraph = () => {
			setIsLoading(true);
			fetch(apiUrl)
				.then(response => response.json())
				.then(data => {
					setIsLoading(false);
					setCityList(data.list);
					setCityname(data.city.name);
					setError("");
				})
				.catch(error => {
					setIsLoading(false);
					setCityList([]);
					setError("Something Wrong, ", error);
				});
		};
		getForecastGraph();
	}, [apiUrl]);

	return (
		<div>
			<Link to='/'>
				<button>Back</button>
			</Link>

			<h2>5 day forecast graph for {cityName}</h2>
			{isError && isError}
			{isLoading && <h3>Loading...</h3>}

			<AreaChart
				width={1000}
				height={400}
				data={cityList}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='dt_txt' />
				<YAxis dataKey='main.temp' />
				<Tooltip />
				<Area type='monotone' dataKey='main.temp' stroke='#8884d8' fill='#8884d8' />
			</AreaChart>
		</div>
	);
}
