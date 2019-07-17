import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { messagesReducer } from './messagesReducer';
import { registerReducer } from './RegisterReducer';

export default combineReducers({
	auth: authReducer,
  messages: messagesReducer,
  register: registerReducer
});
