export default (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_MESSAGE':
			return [...state, action.message];
		case 'ADD_EXISTING_MESSAGES':
			const messages = payload.messages.filter(m => {
				// fix this
				return !JSON.stringify(state).includes(JSON.stringify(m));
			});
			return [...messages, ...state];
		default:
			return state;
	}
};
