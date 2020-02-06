// Frameworks
import React, { Component } from 'react';

//	SearchBar Component
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onSubmit(e) {
		e.preventDefault();

		var value = document.querySelector('#search-bar').value;

		this.props.submitInput(value);
	}

	render() {
		return (
			<form onSubmit={(e) => this.onSubmit(e)}>
				<div className="input-group mb-3">
				  	<input id="search-bar" type="text" className="form-control" />

				  	<div className="input-group-prepend">
				  	  <button className="btn btn-primary" type="submit">SEARCH</button>
				  	</div>
				</div>
			</form>
		);
	}
}

// Export SearchBar
module.exports = SearchBar;