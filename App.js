import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Image, Text, View } from 'react-native';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export class App extends Component {
	render () {
		return (
			<Provider store={createStore(reducers)}>
				<Router />
			</Provider>
		);
	}
}

export default App;
