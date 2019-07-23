import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../common/Button';

export default class SplashPage extends Component {
	render() {
		const { imageStyle, textStyle, textViewStyle, logInContainerStyle, logInTextStyle, logInButtonStyle } = styles;
		return (
			<View style={imageStyle}>
				<View style={textViewStyle}>
					<Text style={textStyle}>LangChat</Text>
				</View>
				<Image style={imageStyle} source={{ uri: 'https://i.imgur.com/zciZ8K6.jpg' }} />
				<Button onPress={() => Actions.signUpForm()}>Sign Up</Button>
				<View style={logInContainerStyle}>
					<Text style={logInTextStyle}>Already have an account?</Text>
					<Text style={logInButtonStyle} onPress={() => Actions.loginForm()}>
						Log In
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 70,
		fontWeight: '700',
		color: '#fff',
		marginTop: "93%"
	},
	imageStyle: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		backgroundColor: "#000",
		opacity: 0.9
	},
	textViewStyle: {
		position: 'absolute',
		zIndex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 60,
		width: '100%'
	},
	logInContainerStyle: {
		position: 'absolute',
		top: '93%',
		alignSelf: 'center',
		fontWeight: '600',
		flexDirection: 'row'
	},
	logInTextStyle: {
		fontSize: 15,
		color: '#fff'
	},
	logInButtonStyle: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 8,
		textDecorationLine: 'underline'
	}
});
