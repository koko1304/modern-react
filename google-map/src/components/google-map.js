import React, { Component } from 'react';

class GoogleMap extends Component {

	// This shouldComponentUpdate is using to prevent component from rerender
	// You must return false to prevent component from rerender
	shouldComponentUpdate() {
		return false;
	}

	// This componentWillReceiveProps will be call when it receive new props
	// New props available in nextProps parameter
	componentWillReceiveProps(nextProps) {
		this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
	}

	componentDidMount() {
		const center = { lat: this.props.lat, lng: this.props.lng };

		this.map = new google.maps.Map(this.refs.mapCanvas, {
			center: center,
			zoom: 9
		});
	}

	render() {
		return (
			<div ref="mapCanvas" id="google-map" style={{height: '500px'}}></div>
		);
	}
}

export default GoogleMap;