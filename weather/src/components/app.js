// Frameworks
import React from 'react';

// Containers
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

const App = () => {
    return (
		<div className="py-5">
			<h1 className="display-4">WEATHER FORCAST</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, inventore.</p>
			<SearchBar />
			<WeatherList />
		</div>
    );
};

export default App;