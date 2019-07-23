import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import Button from '../common/Button';
import styles from './styles';

export default class SplashPage extends Component {
	render() {
		const {
			imageStyle,
			textStyle,
			flexContainer,
			logInContainerStyle,
			logInTextStyle,
			logInButtonStyle,
			container
		} = styles;
		return (
			<View style={container}>
				<Image style={imageStyle} source={{ uri: 'https://i.imgur.com/zciZ8K6.jpg' }} />
				<View style={flexContainer}>
					<Text style={textStyle}>LangChat</Text>
					<View style={{ width: '100%' }}>
						<Button onPress={() => Actions.signUpForm()}>Sign Up</Button>
						<View style={logInContainerStyle}>
							<Text style={logInTextStyle}>Already have an account?</Text>
							<Text style={logInButtonStyle} onPress={() => Actions.loginForm()}>
								Log In
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
