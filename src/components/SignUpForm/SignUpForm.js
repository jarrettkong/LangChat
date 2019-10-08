import React, { Component } from 'react';
import { View, Text, Picker, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { MaterialCommunityIcons, AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import Data from '../../Helper/data';
import { connect } from 'react-redux';
import { login, handleError } from '../../actions';
import PropTypes from 'prop-types';
import styles from './styles';

export class SignUpForm extends Component {
	state = {
		page: 1,
		firstName: '',
		lastName: '',
		username: '',
		country: 'United States',
		email: '',
		password: '',
		confirmation: '',
		loading: false
	};

	handleChange = (name, text) => {
		this.setState({ [name]: text }, () => console.log(this.state));
	};

	buttonToRender = () => {
		const { firstName, lastName, username, email, password } = this.state;
		if (this.state.page === 1) {
			return (
				<Button
					disabled={!firstName || !lastName || !username}
					onPress={() => this.setState({ page: 2 })}
					data-test="user-info-btn"
				>
					Next
				</Button>
			);
		}
		if (this.state.page === 2) {
			return (
				<Button onPress={() => this.setState({ page: 3 })} data-test="next-btn">
					Next
				</Button>
			);
		}
		if (this.state.loading) {
			return (
				<View style={{ marginBottom: 5, marginTop: 40 }}>
					<Spinner size="large" />
				</View>
			);
		}
		return (
			<Button
				disabled={!email || !password || !this.state.confirmation || this.validatePassword()}
				onPress={() => this.register() && Keyboard.dismiss()}
				data-test="email-password-submit-btn"
			>
				Sign Up!
			</Button>
		);
	};

	renderPicker = () => {
		const countries = Data.countries;
		const { country } = this.state;
		return (
			<Picker
				style={{
					width: '100%',
					height: 244
				}}
				itemStyle={{ fontSize: 25 }}
				selectedValue={country}
				onValueChange={country => this.handleChange('country', country)}
				data-test="country-picker"
			>
				{countries.map(country => {
					return <Picker.Item key={country} label={country} value={country} />;
				})}
			</Picker>
		);
	};

	register = async () => {
		const { email, password, firstName, lastName, username, country } = this.state;
		const newUser = {
			displayName: username,
			email,
			firstName,
			lastName,
			active: true,
			countryOfOrigin: country,
			password,
			passwordConfirmation: password
		};
		this.setState({ loading: true });
		try {
			const res = await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/users/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUser)
			});
			const user = await res.json();
			this.login(user);
		} catch (error) {
			this.props.handleError(error.message);
		}
	};

	login = async user => {
		const { username } = user;
		try {
			const res = await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/log_in/?format=json', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ username, password: this.props.password })
			});
			const user = await res.json();
			const cookieData = res.headers.get('set-cookie');
			const match = cookieData.match(/(csrftoken=)\w+;/);
			const csrftoken = match[0].split('=')[1].slice(0, -1);
			this.props.login(user, csrftoken);
			this.setState({ loading: false });
			Actions.tutorial();
		} catch (error) {
			this.props.handleError(
				`The username ${this.state.username} already exists. Please choose another username and try again!`
			);
			this.props.createUserName('');
			this.setState({ page: 1, confirmation: '' });
		}
	};

	validatePassword = () => {
		return this.state.confirmation !== this.state.password;
	};

	render() {
		const { container, inputContainerStyle, textHeaderStyle, passwordErrorStyle } = styles;
		const { email, password, firstName, lastName, username } = this.state;
		return (
			<View style={container}>
				<EvilIcons
					name="close"
					size={40}
					onPress={() => Actions.splashPage()}
					style={{ width: '13%', alignSelf: 'flex-end', color: 'white' }}
					data-test="close-btn"
				/>
				<Text style={textHeaderStyle}>Sign Up</Text>
				{this.state.page === 1 && (
					<React.Fragment>
						<View style={inputContainerStyle}>
							<Input
								label={<Feather name="plus" size={30} color="#999" />}
								placeholder="First Name"
								value={firstName}
								onChangeText={firstName => this.handleChange('firstName', firstName)}
								data-test="first-name-input"
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<Feather name="plus" size={30} color="#999" />}
								placeholder="Last Name"
								value={lastName}
								onChangeText={lastName => this.handleChange('lastName', lastName)}
								data-test="last-name-input"
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="user" size={30} color="#999" />}
								placeholder="Username"
								value={username}
								onChangeText={username => this.handleChange('username', username) && this.props.handleError('')}
								data-test="username-input"
							/>
						</View>
						<Text style={passwordErrorStyle}>{this.props.errorMessage}</Text>
					</React.Fragment>
				)}
				{this.state.page === 2 && <View style={inputContainerStyle}>{this.renderPicker()}</View>}
				{this.state.page === 3 && (
					<React.Fragment>
						<View style={inputContainerStyle}>
							<Input
								label={<MaterialCommunityIcons name="email-outline" size={30} color="#999" />}
								placeholder="Email"
								value={email}
								onChangeText={email => this.handleChange('email', email)}
								data-test="email-input"
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="lock" size={30} color="#999" />}
								placeholder="Password"
								secureTextEntry
								value={password}
								onChangeText={password => this.handleChange('password', password)}
								data-test="password-input"
							/>
						</View>
						<View style={inputContainerStyle}>
							<Input
								label={<AntDesign name="lock" size={30} color="#999" />}
								placeholder="Confirm Password"
								value={this.state.confirmation}
								onChangeText={password => this.handleChange('confirmation', password)}
								secureTextEntry
								data-test="confirm-password-input"
							/>
						</View>
						{this.validatePassword() && this.state.confirmation.length ? (
							<Text style={passwordErrorStyle}>Passwords do not match</Text>
						) : null}
					</React.Fragment>
				)}
				{this.buttonToRender()}
			</View>
		);
	}
}

SignUpForm.propTypes = {
	login: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
	errorMessage: state.errorMessage
});

export const mapDispatchToProps = dispatch => ({
	login: (user, cookie) => dispatch(login(user, cookie)),
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
