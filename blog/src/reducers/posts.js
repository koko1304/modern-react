export default (state = [], { type, payload }) => {
	if (type === 'FETCH_POSTS') {
		return payload.data;
	}

	if (type === 'SELECTED_POST' || type === 'UNSELECTED_POST') {
		return state;
	}
	
	return [];
};