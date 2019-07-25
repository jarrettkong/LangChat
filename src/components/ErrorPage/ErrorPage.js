import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';

export const ErrorPage = () => {
	return (
		<View style={{ flex: 1.0, justiftContent: 'center', alignItems: 'center', padding: 70 }}>
			<Text>Uh oh, something went wrong!</Text>
			<Button style={{marginTop: 50}} onPress={() => Actions.home()}> Go back home!</Button>
		</View>
	);
};

export default ErrorPage;
