import React, { Component } from 'react';

// Components
import Modal from './modal';
import Post from '../containers/post';

export default class App extends Component {
	render() {
		return (
			<div>
				<Modal title="Testing Modal">
					<Post />
				</Modal>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#model-elem">
				  Launch demo modal
				</button>
			</div>
		);
	}
}
