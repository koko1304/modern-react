export default (state = [], {type, payload}) => {

	if (type === "FETCH_WEATHER") {

		// Redux don't allow you to change the state so you must always
		// return new state to redux;
		return [payload.data, ...state];
		
	}

	return state;
}