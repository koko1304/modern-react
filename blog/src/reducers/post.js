export default (state = {}, { type, payload }) => {
	if (type === 'FETCH_POST') {
		return payload.data;
	}

	return {};
};