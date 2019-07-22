import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import { messagesReducer } from './messagesReducer';
import { registerReducer } from './RegisterReducer';
import { userReducer } from './userReducer';
import { tokenReducer } from './tokenReducer';
import { cookieReducer } from './cookieReducer';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
	auth: authReducer,
	messages: messagesReducer,
	register: registerReducer,
	user: userReducer,
	token: tokenReducer,
	cookie: cookieReducer,
	currentUser: currentUserReducer
});
