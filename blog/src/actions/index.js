// Frameworks
import axios from 'axios';

// Variable
const URL = 'http://reduxblog.herokuapp.com/api/posts';
const KEY = 'koko1304';


export function selectedPost(id) {
	return {
		type: 'SELECTED_POST',
		payload: id
	}
}

export function unselectedPost(id) {
	return {
		type: 'UNSELECTED_POST',
		payload: id
	}
}

export function fetchPosts() {
	const request = axios.get(`${URL}?key=${KEY}`);

	return {
		type: 'FETCH_POSTS',
		payload: request
	};
}

export function addPost(values, callback) {
	const request = axios.post(`${URL}?key=${KEY}`, values)
		.then(() => callback());

	return {
		type: 'ADD_POST',
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${URL}/${id}?key=${KEY}`);

	return {
		type: 'FETCH_POST',
		payload: request
	}
}

export function deletePost(id, callback) {
	const request = axios.delete(`${URL}/${id}?key=${KEY}`)
		.then(() => callback());

	return {
		type: 'DELETE_POST',
		payload: id
	}
}