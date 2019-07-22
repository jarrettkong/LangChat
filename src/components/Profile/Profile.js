import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import  Button  from '../common/Button';
import NavDrawer from '../NavDrawer/NavDrawer';

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
				<NavDrawer>
					<View style={styles.mainInfoContainer}>
						<View style={styles.infoContainer}>
							<Text>USERNAME</Text>
							<Text style={styles.inputContainerStyle}>{username}</Text>
						</View>

						<View style={styles.infoContainer}>
							<Text>NAME</Text>

							<Text style={styles.inputContainerStyle}>
								{first_name} {last_name}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text>EMAIL</Text>
							<Text style={styles.inputContainerStyle}>{email}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text>Active</Text>
							<Text style={styles.inputContainerStyle}>
								<Switch
									onValueChange={this.handleActivityPress}
									value={this.state.active}
									style={styles.inputContainerStyle}
								/>
							</Text>
						</View>
					</View>

					<Button style={styles.buttonStyling} onPress={this.logout}>
						Sign out
					</Button>
				</NavDrawer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonStyling: {},
	inputContainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		marginTop: 5,
		backgroundColor: 'blue'
	},
	infoContainer: {
		flex: 1,
		color: '#ffffff'
	},
	mainInfoContainer: {
		flex: 0.5,
		padding: 5
	}
});

export const mapStateToProps = state => ({
	cookie: state.cookie,
	username: state.auth.username,
	password: state.auth.password,
	token: state.token,
	user: state.user
});

export default connect(mapStateToProps)(Profile);
