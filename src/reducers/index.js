import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import messagesReducer from './messagesReducer';
import registerReducer from './RegisterReducer';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import cookieReducer from './cookieReducer';
import handleErrorReducer from './handleErrorReducer';

export default combineReducers({
	auth: authReducer,
	messages: messagesReducer,
	register: registerReducer,
	user: userReducer,
	token: tokenReducer,
	cookie: cookieReducer,
	errorMessage: handleErrorReducer
});
