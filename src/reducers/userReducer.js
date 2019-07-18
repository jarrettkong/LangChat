export const userReducer = (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN':
			return payload.user;
		case 'LOGOUT':
			return null;
		default:
			return state;
	}
};
