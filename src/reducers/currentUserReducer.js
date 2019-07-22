const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CURRENT_USER':
			return action.user;
		default:
			return state;
	}
};
