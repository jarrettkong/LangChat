import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<Router />
		</Provider>
	);
};

export default App;
