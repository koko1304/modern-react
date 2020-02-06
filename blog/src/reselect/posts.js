// Frameworks
import { createSelector } from 'reselect';
import _ from 'lodash';


const listOfPosts = state => state.posts;
const listOfSelectedPostIds = state => state.selectedPostIds;

const getSelectedPosts = (posts, selectedPostIds) => {
	const selectedPosts = _.filter(
		posts,
		post => _.contains(selectedPostIds, post.id)
	);

	return selectedPosts;
};

export default createSelector(
	listOfPosts, // Pick off the piece of state
	listOfSelectedPostIds, // Pick off the piece of state
	getSelectedPosts // Last argument is the function that has filter logic
);