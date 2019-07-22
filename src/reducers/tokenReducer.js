export default (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN':
			return payload.user.token;
		case 'LOGOUT':
			return null;
		default:
			return state;
	}
};
