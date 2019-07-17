import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { messagesReducer } from './messagesReducer';

export default combineReducers({
	auth: authReducer,
	messages: messagesReducer
});
