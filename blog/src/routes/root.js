// Frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchPosts, selectedPost, unselectedPost } from '../actions';

// Containers
import ReselectedPostsList from '../container/reselected-posts-list';

class Root extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	handleClick(e, id) {

		if (e.target.checked) {
			this.props.selectedPost(id);
		} else {
			this.props.unselectedPost(id)
		}

	}

	organizePosts(posts) {
		const postItems = posts.map((post) => {
			return (
				<li className="list-group-item list-group-item-action" key={post.id}>
					<input onClick={(e) => this.handleClick(e, post.id)} type="checkbox" className="mr-3"/>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			);
		});

		return (
			<ul style={{ listStyleType: "none" }} className="list-group">
				{postItems}
			</ul>
		);
	}

	render() {
		return (
			<div className="py-5">
				<Link to="/posts/add" className="btn btn-primary float-right">Add Post</Link>
				<div className="clearfix"></div>
				<hr/>
				{this.organizePosts(this.props.posts)}
				<hr/>
				<h2>DELETE COLLECTION</h2>
				<ReselectedPostsList/>
			</div>
		);
	}
}

export default connect( ({posts}) => ({posts}), { fetchPosts, selectedPost, unselectedPost })(Root);