import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { Actions } from 'react-native-router-flux';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { changeUsername, changePassword, login, handleError } from '../../actions/index';
import PropTypes from 'prop-types';
import styles from './styles';

export class LoginForm extends Component {
	state = {
		loading: false,
		username: '',
		password: ''
	};

	handleChange = (value, name) => {
		this.props.handleError('');
		this.setState({
			[name]: value
		});
	};

	login = async () => {
		const { username, password } = this.state;
		try {
			this.setState({ loading: true });
			const res = await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/log_in/?format=json', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ username, password })
			});
			const user = await res.json();

			const cookieData = res.headers.get('set-cookie');
			const match = cookieData.match(/(csrftoken=)\w+;/);
			const csrftoken = match[0].split('=')[1].slice(0, -1);
			this.storeToken(user.token);
			this.props.login(user, csrftoken);
			Actions.home();
		} catch (error) {
			this.props.handleError('Your username or password is invalid. Please try again.');
		}
		this.setState({ loading: false });
	};

	disabled = () => {
		const { username, password } = this.props;
		const { loading } = this.state;
		return !username || !password || loading;
	};

	renderButton = () => {
		if (this.state.loading) {
			return (
				<View style={{ marginBottom: 5, marginTop: 40 }}>
					<Spinner size="large" />
				</View>
			);
		}

		return (
			<Button disabled={this.disabled()} onPress={() => this.login() && Keyboard.dismiss()} data-test="login-btn">
				Log In
			</Button>
		);
	};

	render() {
		const { container, inputContainerStyle, textHeaderStyle, textErrorStyle } = styles;
		return (
			<KeyboardAvoidingView style={container} behavior="padding" enabled>
				<EvilIcons
					name="close"
					size={40}
					onPress={() => Actions.splashPage()}
					style={{ width: '13%', alignSelf: 'flex-end', color: '#fff' }}
					data-test="close-btn"
				/>
				<Text style={textHeaderStyle}>Log In</Text>
				<View style={inputContainerStyle}>
					<Input
						label={<AntDesign name="user" size={30} color="#999" />}
						placeholder="Username"
						value={this.state.username}
						onChangeText={username => this.handleChange(username, 'username')}
						required
						data-test="username-input"
					/>
				</View>
				<View style={inputContainerStyle}>
					<Input
						label={<AntDesign name="lock" size={30} color="#999" />}
						placeholder="Password"
						secureTextEntry
						required
						value={this.state.password}
						onChangeText={password => this.handleChange(password, 'password')}
						data-test="password-input"
					/>
				</View>
				{this.renderButton()}
				<Text style={textErrorStyle}>{this.props.errorMessage}</Text>
			</KeyboardAvoidingView>
		);
	}
}

LoginForm.propTypes = {
	login: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
	user: state.currentUser,
	errorMessage: state.errorMessage
});

export const mapDispatchToProps = dispatch => ({
	login: (user, cookie) => dispatch(login(user, cookie)),
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
