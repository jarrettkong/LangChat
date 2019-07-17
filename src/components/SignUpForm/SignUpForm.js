import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from '../common';
import { Actions } from 'react-native-router-flux';
import { MaterialCommunityIcons, AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';

class SignUpForm extends Component {
	render () {
		const { containerStyle, inputContainerStyle, textHeaderStyle, buttonContainerStyle } = styles;
		return (
			<View style={containerStyle}>
				<EvilIcons name="close" size={40} onPress={() => Actions.splashPage()} style={{ width: '13%' }} />
				<Text style={textHeaderStyle}>Sign Up</Text>
				<View style={inputContainerStyle}>
					<Input label={<AntDesign name="user" size={30} color="#999" />} placeholder="Username" />
				</View>
				<View style={inputContainerStyle}>
					<Input label={<Feather name="plus" size={30} color="#999" />} placeholder="First Name" />
				</View>
				<View style={inputContainerStyle}>
					<Input label={<Feather name="plus" size={30} color="#999" />} placeholder="Last Name" />
				</View>
				<View style={inputContainerStyle}>
					<Input label={<Ionicons name="md-globe" size={30} color="#999" />} placeholder="Country" />
				</View>
				<View style={inputContainerStyle}>
					<Input label={<MaterialCommunityIcons name="email-outline" size={30} color="#999" />} placeholder="Email" />
				</View>
				<View style={inputContainerStyle}>
					<Input label={<AntDesign name="lock" size={30} color="#999" />} placeholder="Password" secureTextEntry />
				</View>
				<View style={inputContainerStyle}>
					<Input
						label={<AntDesign name="lock" size={30} color="#999" />}
						placeholder="Confirm Password"
						secureTextEntry
					/>
				</View>
				<View style={buttonContainerStyle}>
					<Button>Sign Up!</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	inputContainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 50
	},
	textHeaderStyle: {
		fontSize: 30,
		fontWeight: '600',
		paddingTop: 30,
		paddingBottom: 40
	},
	buttonContainerStyle: {
		marginTop: 80
	}
};

export default SignUpForm;
