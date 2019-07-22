export default (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_MESSAGE':
			return [...state, payload.message];
		default:
			return state;
	}
};
