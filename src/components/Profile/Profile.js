import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import { styles } from './styles';
import NavDrawer from '../NavDrawer/NavDrawer';

export class Profile extends Component {
	componentDidMount () {
		// redirect to splash or 404 if user doesn't exist
		// if (this.props.userName === '') Actions.splashPage();
	}
	constructor (props) {
		super(props);

		this.state = {
			active: true,
			editing: false
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
					<View style={styles.profileContainer}>
						<Image
							style={styles.imageStyle}
							source={{
								uri: 'https://profiles.utdallas.edu/img/default.png'
							}}
						/>
					</View>

					<View style={styles.mainInfoContainer}>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Username:   </Text>
								{username}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Name:   </Text>
								{first_name} {last_name}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Email:   </Text> {email}
							</Text>
						</View>
						{/* <View style={styles.switchContainer}>
							<Text style={styles.label}>Active: </Text>
							<Switch style={styles.switch} onValueChange={this.handleActivityPress} value={this.state.active} />
						</View> */}
					</View>
					<Button style={styles.buttonStyling} onPress={() => this.logout()} data-test='logout-btn'>
						Sign out
					</Button>
				</NavDrawer>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	cookie: state.cookie,
	username: state.auth.username,
	password: state.auth.password,
	token: state.token,
	user: state.user
});

export default connect(mapStateToProps)(Profile);
