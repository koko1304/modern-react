import _ from 'lodash';

export default (state = [], { type, payload }) => {
	if (type === 'SELECTED_POST') {
		return [...state, payload];
	}

	if (type === 'UNSELECTED_POST') {
		return _.remove(state, (id) => !(id === payload));
	}

	if (type === 'FETCH_POSTS') {
		return [];
	}

	return state;
}