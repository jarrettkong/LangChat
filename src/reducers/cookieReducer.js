export const cookieReducer = (state = '', action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN':
			return payload.cookie;
		case 'LOGOUT':
			return '';
		default:
			return state;
	}
};
