export const changeEmail = text => ({
	type: 'CHANGE_EMAIL',
	text
});

export const changePassword = text => ({
	type: 'CHANGE_PASSWORD',
	text
});

export const addMessage = message => ({
	type: 'ADD_MESSAGE',
	payload: { message }
});
