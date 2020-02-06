import React from 'react';
import { connect } from 'react-redux';

// Action Creators
import { updatePost } from '../actions';

const Post = ({ post, updatePost }) => {
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
			<button onClick={updatePost} className="btn btn-primary mt-3">UPDATE</button>
		</div>
	);
}

export default connect(({post}) => ({post}), { updatePost })(Post);