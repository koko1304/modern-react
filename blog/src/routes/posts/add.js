// Frameworks
import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

// Action Creator
import { addPost } from '../../actions/';

// Fields Configuration
const fields = {
	title: {
		label: 'Title:',
		type: 'input',
		error: 'Title'
	},
	categories: {
		label: 'Categories:',
		type: 'input',
		error: 'Categories'
	},
	content: {
		label: 'Content:',
		type: 'textarea',
		error: 'Content'
	}
};

class AddPost extends Component {
	inputField( { meta: { invalid, touched, error }, input, Type, label} ) {

		return (
			<div className="form-group">
				<label className="d-block">
					{label}
					<Type
					className={`form-control ${(invalid && touched) ?  'is-invalid' : ''}`} 
					type="text" 
					{...input} />
					<p className="invalid-feedback">{touched ? error : ''}</p>
				</label>
			</div>
		);
	}

	renderFields() {
		return _.map(fields, ({ type, label }, key) => {
			return <Field key={key} name={key} Type={type} label={label} component={this.inputField} />;
		});
	}

	onSubmit(values, dispatch) {
		this.props.addPost(values, () => {
			// Reset Input Value (require: form name)
			dispatch(reset('AddPostForm'));

			// Navigate to root route after successful submit
			this.props.history.push('/');
		});
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="py-5">
				<h1>Create Post</h1>
				{this.renderFields()}
				<button className="btn btn-primary mr-3" type="submit">SUBMIT</button>
				<Link className="btn btn-danger" to="/">CANCAL</Link>
			</form> 
		);
	}
};

function validate(values) {
	var errors = {};

	_.each(fields, ({error}, key) => {
		if (!values[key]) {
			errors[key] = `${error} is required.`;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'AddPostForm'
})(connect(null, { addPost })(AddPost));