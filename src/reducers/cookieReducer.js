export const cookieReducer = (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN':
			return payload.cookie;
		case 'LOGOUT':
			return null;
		default:
			return state;
	}
};
