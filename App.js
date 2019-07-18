import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';
import Drawer from './src/components/Drawer/Drawer';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<Drawer />
			<Router />
		</Provider>
	);
};

export default App;
