export default (state, payload) => {

	if (payload.type === 'UPDATE_POST') {
		
		return {
			title: 'Update Javascript',
			content: 'Testing the update'
		}
	}

	return {
		title: 'Learn Javascript',
		content: 'Try hard to acheive my goal'
	};
}