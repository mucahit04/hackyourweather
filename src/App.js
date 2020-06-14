import React from "react";
import Search from "./components/Search";
import WeatherChart from "./components/WeatherChart";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'> HackYourWeather</header>
				<div className='main-div'>
					<Switch>
						<Route exact path='/' component={Search} />
						<Route path='/:cityId' component={WeatherChart} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
