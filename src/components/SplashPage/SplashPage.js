import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import Button from '../common/Button';
import styles from './styles';

const SplashPage = () => {
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
			<Image
				style={imageStyle}
				source={{
					uri:
						'https://media.istockphoto.com/photos/speech-bubbles-colorful-communication-thoughts-talking-concept-picture-id486478366?k=6&m=486478366&s=612x612&w=0&h=zWcVmwbInjN9CXgDfG_ldOjgiKr5JAVvu6oyNagbLjs='
				}}
				resizeMode="contain"
			/>
			<View style={flexContainer}>
				<Text style={{ ...textStyle, height: 150 }}>LangChat</Text>
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
};

export default SplashPage;
