// Frameworks
import axios from 'axios';

// Variable
const API_KEY = '722fe74c4a008462608a72acc3b6aedc';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(payload) {
	
	var data = axios.get(`${URL}&q=${payload}`);

	return { 
		type: 'FETCH_WEATHER', 
		payload: data
	};
};