import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Action Creators
import { fetchPosts, updatePost, deletePost, addPost } from '../actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	createPostsListItems() {
		const { posts } = this.props;

		return _.map(posts, (post, key) => {
			return <li key={key} className="list-group-item">{post.title}</li>
		});
	}

	handleUpdatePost() {
		this.props.updatePost({ id: 1, title: 'JS' });
	}

	handleDeletePost() {
		this.props.deletePost(1);
	}

	handleAddPost() {
		this.props.addPost({ id: 4, title: 'react-router-dom'});
	}

	render() {
		return (
			<div className="mt-4">
				<ul className="list-group">
					{this.createPostsListItems.call(this)}
				</ul>
				<button onClick={this.handleUpdatePost.bind(this)} className="btn btn-primary mt-3 mr-3">UPDATE POST</button>
				<button onClick={this.handleDeletePost.bind(this)} className="btn btn-primary mt-3 mr-3">DELETE POST</button>
				<button onClick={this.handleAddPost.bind(this)} className="btn btn-primary mt-3">ADD POST</button>
			</div>
		);
	}
}

export default connect(({posts}) => ({posts}), { fetchPosts, updatePost, deletePost, addPost })(App);
