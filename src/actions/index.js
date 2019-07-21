export const changeUsername = text => ({
	type: 'CHANGE_USERNAME',
	text
});

export const changePassword = text => ({
	type: 'CHANGE_PASSWORD',
	text
});

export const createEmail = text => ({
	type: 'CREATE_EMAIL',
	text
});

export const createPassword = text => ({
	type: 'CREATE_PASSWORD',
	text
});

export const createFirstName = text => ({
	type: 'CREATE_FIRST_NAME',
	text
});

export const createLastName = text => ({
	type: 'CREATE_LAST_NAME',
	text
});

export const createUserName = text => ({
	type: 'CREATE_USERNAME',
	text
});

export const createCountry = text => ({
	type: 'CREATE_COUNTRY',
	text
});

export const addMessage = message => ({
	type: 'ADD_MESSAGE',
	payload: { message }
});

export const login = (user, cookie) => ({
	type: 'LOGIN',
	payload: { user, cookie }
});

export const logout = () => ({
	type: 'LOGOUT'
});
