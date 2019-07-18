import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Nav extends Component {
	render () {
		return (
			<View>
				<Button title="splashPage" onPress={() => Actions.splashPage()} />
				<Button title="loginForm" onPress={() => Actions.loginForm()} />
				<Button title="signUpForm" onPress={() => Actions.signUpForm()} />
				<Button title="home" onPress={() => Actions.home()} />
				<Button title="chatRoom" onPress={() => Actions.chatRoom()} />
			</View>
		);
	}
}
