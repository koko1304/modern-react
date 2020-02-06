import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Reselected
import reselectedPosts from '../reselect/posts';

const ReselectedPostsList = ({reselectedPosts, deletePosts, fetchPosts}) => {
	const transitionOptions = {
		transitionName: 'fade',
		transitionEnterTimeout: 500,
		transitionLeaveTimeout: 500
	};

	return (
		<ul className="list-group mb-4">
			<ReactCSSTransitionGroup {...transitionOptions}>
				{reselectedPosts.map((post) => {
					return <li key={post.id} className="list-group-item">{post.title}</li>;
				})}
			</ReactCSSTransitionGroup>
		</ul>
	);
};

export default connect( (state) => ({ reselectedPosts: reselectedPosts(state) }))(ReselectedPostsList);