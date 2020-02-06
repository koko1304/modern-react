// Frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Action Creators
import { fetchPost, deletePost } from '../../actions/';

class PostDetail extends Component {
	componentWillMount() {
		const { fetchPost, match } = this.props;

		fetchPost(match.params.id);
	}

	handleDelete() {
		const { deletePost, match, history } = this.props;

		deletePost(match.params.id, function() {
			history.push('/');
		});
	}

	render() {
		const { title, categories, content } = this.props.post;

		return (
			<div>
				<h1>{title}</h1>
				<hr/>
				<p>Category: {categories}</p>
				<p>{content}</p>
				<hr/>
				<Link className="btn btn-primary mr-3" to="/">BACK</Link>
				<button onClick={this.handleDelete.bind(this)} className="btn btn-danger">DELETE</button>
			</div>
		);
	}
}

// ownProps === this.props (inside component)
export default connect(({ post }, ownProps) => ({ post }), { fetchPost, deletePost })(PostDetail);