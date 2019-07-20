export const tokenReducer = (state = '', action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN':
			return payload.user.token;
		case 'LOGOUT':
			return '';
		default:
			return state;
	}
};
