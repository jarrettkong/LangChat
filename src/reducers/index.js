import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import { messagesReducer } from './messagesReducer';
import { registerReducer } from './RegisterReducer';
import { userReducer } from './userReducer';
import { tokenReducer } from './tokenReducer';

export default combineReducers({
	auth: authReducer,
	messages: messagesReducer,
	register: registerReducer,
	user: userReducer,
	token: tokenReducer
});
