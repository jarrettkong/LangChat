import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Nav extends Component {
	render () {
		return (
			<View>
				<Button title="Splash page" onPress={() => Actions.splashPage()} />
				<Button title="Login" onPress={() => Actions.loginForm()} />
				<Button title="Signup" onPress={() => Actions.signUpForm()} />
				<Button title="Home" onPress={() => Actions.home()} />
				<Button title="Chatroom" onPress={() => Actions.chatRoom()} />
			</View>
		);
	}
}
