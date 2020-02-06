import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../index';
import { Provider } from 'react-redux';

class Modal extends Component {
	componentDidMount() {
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'modal-container';
		document.body.appendChild(this.modalTarget);
		this._render();
	}

	componentDidUpdate() {
		this._render();
	}

	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}

	createModal() {
		return (
			<div className="modal fade" id="model-elem" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalLabel">{this.props.title}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	_render() {
		ReactDOM.render(
			<Provider store={store}>
				{this.createModal.call(this)}
			</Provider>,
			this.modalTarget
		);
	}

	render() {
		return <div></div>;
	}
}

export default Modal;