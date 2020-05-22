import React from "react";

export default function CityItem(props) {
	const { cityName, country,weatherMain, weatherDesc, longitude,latitude, temp_min,temp_max} = props;
	return <div className="city-item">
        <h2>{cityName}, {country}</h2>
        <div className="weather-desc">
        <p className="bold">{weatherMain}</p>
        <p>{weatherDesc}</p>
        </div>
        <ul>
        <li>min temp: {temp_min}</li>
        <li>max temp: {temp_max}</li>
        <li>location: {latitude}, {longitude}</li>
        </ul>
    </div>;
}
