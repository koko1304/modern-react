// Frameworks
import React from 'react';
import { connect } from 'react-redux';

const WeatherList = ({weather}) => {

	const cityList = weather.map((city) => {

		const { name } = city.city;
		const { temp, pressure, humidity } = city.list[0].main;


		return (
			<tr key={name}>
				<td>{name}</td>
				<td>{temp}</td>
				<td>{pressure}</td>
				<td>{humidity}</td>
			</tr>
		);
	});

	return (

		<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
			</thead>
			<tbody>
				{cityList}
			</tbody>
		</table>

	);
};

/* 
state => {
	return {
		weather: state.weather
	};
} 
*/
export default connect( ({weather}) => ({weather}) )(WeatherList);