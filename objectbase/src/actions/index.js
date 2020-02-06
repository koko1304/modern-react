const fakeData = [
	{
		id: 1,
		title: 'Javascript'
	},
	{
		id: 2,
		title: 'React'
	},
	{
		id: 3,
		title: 'Redux'
	}
];

export function fetchPosts() {

	return {
		type: 'FETCH_POSTS',
		payload: fakeData
	};
}

export function updatePost(post) {

	return {
		type: 'UPDATE_POST',
		payload: post
	}
}

export function deletePost(id) {

	return {
		type: 'DELETE_POST',
		payload: id
	}
}

export function addPost(post) {

	return {
		type: 'ADD_POST',
		payload: post
	}
}