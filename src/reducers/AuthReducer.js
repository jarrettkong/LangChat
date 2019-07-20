const INITIAL_STATE = { email: '', password: '' };

export const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_USERNAME':
			return { ...state, username: action.text };
		case 'CHANGE_PASSWORD':
			return { ...state, password: action.text };
		default:
			return state;
	}
};
