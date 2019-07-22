const INITIAL_STATE = { username: '', password: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_USERNAME':
			return { ...state, username: action.text };
		case 'CHANGE_PASSWORD':
			return { ...state, password: action.text };
		case 'LOGOUT':
			return INITIAL_STATE;
		default:
			return state;
	}
};
