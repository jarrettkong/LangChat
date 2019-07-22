import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';

export class Profile extends React.Component {
	componentDidMount () {
		// redirect to splash or 404 if user doesn't exist
		// if (this.props.userName === '') Actions.splashPage();
	}
	constructor (props) {
		super(props);

		this.state = {
			active: true
		};
	}

	handlePress = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};
	handleActivityPress = () => {
		const { active } = this.state;
		// edit the server here
		this.setState({ active: !active });
	};

	logout = async () => {
		try {
			const { username, password } = this.props;
			await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/log_out/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRFToken': this.props.cookie,
					Authorization: `Token ${this.props.token}`
				},
				body: JSON.stringify({ username, password })
			});
			Actions.splashPage();
		} catch (error) {
			console.log(error.message);
		}
	};
	render () {
		const { country_of_origin, email, first_name, is_active, last_name, username, password } = this.props.user;
		// todo change this.state to props after login is saving in redux store
		return (
			<View style={styles.container}>
				<React.Fragment>
					<View style={styles.inputContainer}>
						<Text style={styles.inputContainerStyle}>
							<Image style={styles.imageStyle} source={{ uri: 'https://i.stack.imgur.com/34AD2.jpg' }} />
							{first_name} {last_name}
						</Text>
						<Text style={styles.inputContainerStyle}>{username}</Text>
						<Text style={styles.inputContainerStyle}>{this.props.password}</Text>
						<Text style={styles.inputContainerStyle}>{country_of_origin}</Text>
						<Text style={styles.inputContainerStyle}>{email}</Text>
						<Text style={styles.inputContainerStyle}>
							Active:
							<Switch
								onValueChange={this.handleActivityPress}
								value={this.state.active}
								style={styles.inputContainerStyle}
							/>
						</Text>
					</View>
				</React.Fragment>
				<Button title="edit" onPress={this.handlePress} />
				<Button style={styles.buttonStyling} onPress={this.logout}>
					Sign out
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1.0,
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
		paddingTop: 50,
		justifyContent: 'space-between'
	},
	inputContainer: {
		flex: 1
	},
	buttonStyling: {
		marginBottom: 50
	},
	input: {
		backgroundColor: 'yellow',
		padding: 10,
		marginBottom: 10
	},
	inputContainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	imageStyle: {
		flex: 1.0,
		borderRadius: 100,
		width: 40,
		height: 40
	},
	imageContainerStyle: {
		flex: 0.5
	}
});

export const mapStateToProps = state => ({
	cookie: state.cookie,
	username: state.auth.username,
	password: state.auth.password,
	token: state.token,
	user: state.currentUser
});

export default connect(mapStateToProps)(Profile);
