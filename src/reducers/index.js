import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { messagesReducer } from './messagesReducer';

export default combineReducers({
	auth: AuthReducer,
	messages: messagesReducer
});
