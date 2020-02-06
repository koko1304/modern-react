// Frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creator
import { fetchWeather } from '../actions';

// Variables
const bind = bindActionCreators;

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	submitHandler(e) {
		e.preventDefault();

		this.props.fetchWeather(this.state.term);

		this.setState({ term: '' });
	}

	// This funciton will be run after render() function put the structure JSX
	// into the DOM
	componentDidMount() {
		this.refs.searchBtn.innerHTML = 'SEARCH';
	}

	render() {
		return (
			<form onSubmit={(e) => this.submitHandler(e)} className="input-group mb-3">
			  <input value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} type="text" className="form-control"/>
			  <div className="input-group-append">

			  	{/* ref="searchBtn" give you direct access to this element by using
			  		this.refs.searchBtn Example this.refs.searchBtn.innerHTML = "SEARCH" */}
			    <button ref="searchBtn" className="btn btn-primary" type="submit">SUBMIT</button>
			  </div>
			</form>
		);
	}
}


/* 
dispatch => {
	return bind({ fetchWeather: fetchWeather }, dispatch);
}
*/
export default connect(null, dispatch => bind({ fetchWeather }, dispatch))(SearchBar);