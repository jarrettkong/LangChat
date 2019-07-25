import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import { MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { changeUsername, changePassword, login, currentUser } from '../../actions/index';
import PropTypes from 'prop-types';
import styles from './styles';

export class LoginForm extends Component {
	state = {
		loading: false
	};

	handleChange = (text, input) => {
		if (input === 'username') {
			this.props.changeUsername(text);
		} else {
			this.props.changePassword(text);
		}
	};

	login = async () => {
		this.setState({ loading: true });
		const { username, password } = this.props;
		try {
			const res = await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/log_in/?format=json', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ username, password })
			});
			const user = await res.json();

			const cookieData = res.headers.get('set-cookie'); //use postive lookbehind to extract csfrtoken= and positive lookahead to extract ;
			const match = cookieData.match(/(csrftoken=)\w+;/);
			const csrftoken = match[0].split('=')[1].slice(0, -1);
			this.props.login(user, csrftoken);
			Actions.home();
		} catch (error) {
			console.log(error.message);
		}
		this.setState({ loading: false });
	};

	disabled = () => {
		const { username, password } = this.props;
		const { loading } = this.state;
		return !username || !password || loading;
	};

	render () {
		const { container, inputContainerStyle, textHeaderStyle } = styles;
		const { username, password } = this.props;
		const { loading } = this.state;
		return (
			<KeyboardAvoidingView style={container} behavior="padding" enabled>
				<EvilIcons
					name="close"
					size={40}
					onPress={() => Actions.splashPage()}
					style={{ width: '13%', alignSelf: 'flex-end', color: 'white' }}
					data-test="close-btn"
				/>
				<Text style={textHeaderStyle}>Log In</Text>
				<View style={inputContainerStyle}>
					<Input
						label={<AntDesign name="user" size={30} color="#999" />}
						placeholder="Username"
						value={this.props.username}
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
						value={this.props.password}
						onChangeText={password => this.handleChange(password, 'password')}
						data-test="password-input"
					/>
				</View>
				<Button disabled={this.disabled()} onPress={() => this.login()} data-test="login-btn">
					Log In
				</Button>
			</KeyboardAvoidingView>
		);
	}
}

LoginForm.propTypes = {
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	changePassword: PropTypes.func.isRequired,
	changeUsername: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	currentUser: PropTypes.func.isRequired
};
export const mapStateToProps = state => ({
	username: state.auth.username,
	password: state.auth.password,
	user: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
	changeUsername: text => dispatch(changeUsername(text)),
	changePassword: text => dispatch(changePassword(text)),
	login: (user, cookie) => dispatch(login(user, cookie))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
