import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Button, Input } from '../common';
import { Actions } from 'react-native-router-flux';
import { MaterialCommunityIcons, AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import Data from '../../Helper/data';
import { connect } from 'react-redux';
import {
	createEmail,
	createPassword,
	createFirstName,
	createLastName,
	createUserName,
	createCountry
} from '../../actions/index';

class SignUpForm extends Component {
	state = { userInfo: true, userCountry: false, userCredentials: false, country: '' };

	buttonToRender = () => {
		if (this.state.userInfo) {
			return <Button onPress={() => this.setState({ userInfo: false, userCountry: true })}>Next</Button>;
		}
		if (this.state.userCountry) {
			return <Button onPress={() => this.setState({ userCountry: false, userCredentials: true })}>Next</Button>;
		}
		return <Button>Sign Up!</Button>;
	};

	renderPicker = () => {
    const countries = Data.countries;
    const { createCountry, country } = this.props
		return (
			<Picker
				style={{
					width: '100%',
					height: 444
				}}
				itemStyle={{ height: '100%', fontSize: 25 }}
				selectedValue={country}
				onValueChange={(itemValue, itemIndex) => createCountry( itemValue )}>
				{countries.map(country => {
					return <Picker.Item key={country} label={country} value={country} />;
				})}
			</Picker>
		);
	};

	render () {
		const { containerStyle, inputContainerStyle, textHeaderStyle, buttonContainerStyle } = styles;
		const {
			email,
			password,
			firstName,
			lastName,
			createFirstName,
			createLastName,
			createEmail,
			createPassword,
			userName,
      createUserName
		} = this.props;
		return (
			<View style={containerStyle}>
				<EvilIcons name="close" size={40} onPress={() => Actions.splashPage()} style={{ width: '13%' }} />
				<Text style={textHeaderStyle}>Sign Up</Text>
				{this.state.userInfo && (
					<React.Fragment>
						<View style={inputContainerStyle}>
							<Input
								label={<Feather name="plus" size={30} color="#999" />}
								placeholder="First Name"
								value={firstName}
								onChangeText={firstName => createFirstName(firstName)}
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<Feather name="plus" size={30} color="#999" />}
								placeholder="Last Name"
								value={lastName}
								onChangeText={lastName => createLastName(lastName)}
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="user" size={30} color="#999" />}
								placeholder="Username"
								value={userName}
								onChangeText={userName => createUserName(userName)}
							/>
						</View>
					</React.Fragment>
				)}
				{this.state.userCountry && <View style={inputContainerStyle}>{this.renderPicker()}</View>}
				{this.state.userCredentials && (
					<React.Fragment>
						<View style={inputContainerStyle}>
							<Input
								label={<MaterialCommunityIcons name="email-outline" size={30} color="#999" />}
								placeholder="Email"
								value={email}
								onChangeText={email => createEmail(email)}
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="lock" size={30} color="#999" />}
								placeholder="Password"
								secureTextEntry
								value={password}
								onChangeText={password => createPassword(password)}
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="lock" size={30} color="#999" />}
								placeholder="Confirm Password"
								secureTextEntry
							/>
						</View>
					</React.Fragment>
				)}
				<View style={buttonContainerStyle}>{this.buttonToRender()}</View>
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

export const mapStateToProps = state => ({
	email: state.register.email,
	password: state.register.password,
	firstName: state.register.firstName,
	lastName: state.register.lastName,
	userName: state.register.userName,
	country: state.register.country
});

export const mapDispatchToProps = dispatch => ({
	createFirstName: firstName => dispatch(createFirstName(firstName)),
	createLastName: lastName => dispatch(createLastName(lastName)),
	createEmail: email => dispatch(createEmail(email)),
	createPassword: password => dispatch(createPassword(password)),
	createUserName: userName => dispatch(createUserName(userName)),
	createCountry: country => dispatch(createCountry(country))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);