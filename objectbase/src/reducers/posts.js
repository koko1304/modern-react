import _ from 'lodash';

export default (state = {}, { type, payload }) => {

	if (type === 'FETCH_POSTS') {
		
		const newPosts = _.mapKeys(payload, 'id');

		return { ...state, ...newPosts};
	}

	if (type === 'UPDATE_POST') {

		return { ...state, [payload.id]: payload };

	}

	if (type === 'DELETE_POST') {

		return _.omit(state, payload);

	}

	if (type === 'ADD_POST') {

		return { ...state, [payload.id]: payload };

	}

	return state;
}


// Add Post
// return { ...state, [newPost.id]: newPost }
// Note: '[newPost.id]' will be assign as key of new post

// Add Posts
// const newPosts = _.mapKeys(arrayOfPosts, 'id')
// return { ...state, ...newPosts}

// Delete Existed Post
// return _.omit(state, postIdToDelete)

// Delete Existed Posts
// return _.omit(state, arrayOfPostsIdToDelete)

// Update Existed Post Data
// const posts = { ...state };
// posts[postIdToUpdate].name = newName;
// return posts

// Update Existed Post
// return { ...state, [existedPost.id]: newPost }

// Update Existed Posts
// const newPosts = _.mapKeys(arrayOfPosts, 'id')
// return { ...state, ...newPosts }
// Note: 'id' is an id value inside id key of each post and will be
// assign as key of each post
// Note: second statement '...newPosts' will be overwrite existed posts inside '...state'