import React, { Component } from 'react';

// components
import GoogleMap from './google-map';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { lat: 13.3406435, lng: 103.7228656 };
	}

	handleUpdatePhnomPenh() {
		this.setState({ lat: 11.5796669, lng: 104.7500978 });
	}

	handleUpdateSiemReap() {
		this.setState({ lat: 13.3406435, lng: 103.7228656 });
	}

	render() {
		return (
				<div>
					<GoogleMap lat={this.state.lat} lng={this.state.lng} />
					<button onClick={this.handleUpdatePhnomPenh.bind(this)} className="btn btn-primary mt-3 mr-3">PHNOMPENH</button>
					<button onClick={this.handleUpdateSiemReap.bind(this)} className="btn btn-primary mt-3">SIEMREAP</button>
				</div>
			);
		}
	}
