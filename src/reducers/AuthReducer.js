const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'EMAIL_CHANGED':
			return { ...state, email: action.text };
		case 'PASSWORD_CHANGED':
			return { ...state, password: action.text };
		default:
			return state;
	}
};
