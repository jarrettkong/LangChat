import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';

export const ErrorPage = () => {
	return (
		<View>
			<Text>Uh oh, something went wrong!</Text>
			<Button title="Go back home" onPress={() => Actions.home()} />
		</View>
	);
};

export default ErrorPage;
