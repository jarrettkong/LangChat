const INITIAL_STATE = { firstName: '', lastName: '', userName: '', country: 'United States', email: '', password: '' };

export const registerReducer =  (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CREATE_FIRST_NAME':
			return { ...state, firstName: action.text };
		case 'CREATE_LAST_NAME':
			return { ...state, lastName: action.text };
		case 'CREATE_USERNAME':
			return { ...state, userName: action.text };
		case 'CREATE_COUNTRY':
			return { ...state, country: action.text };
		case 'CREATE_EMAIL':
			return { ...state, email: action.text };
		case 'CREATE_PASSWORD':
			return { ...state, password: action.text };
		default:
			return state;
	}
};
