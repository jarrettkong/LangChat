import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import { styles } from './styles';
import { handleError } from '../../actions';
import NavDrawer from '../NavDrawer/NavDrawer';

export class Profile extends Component {
	state = { active: true, editing: false };

	handlePress = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};

	handleActivityPress = () => {
		const { active } = this.state;
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
			this.props.handleError(error.message);
		}
	};
	render () {
		const { country_of_origin, email, first_name, last_name, username } = this.props.user;

		return (
			<View style={styles.container}>
				<NavDrawer name="Profile">
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
								<Text style={styles.label}>Username: </Text>
								{username}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Name: </Text>
								{first_name} {last_name}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Email: </Text> {email}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Location: </Text>
								{country_of_origin}
							</Text>
						</View>
						{/* <View style={styles.switchContainer}>
							<Text style={styles.label}>Active: </Text>
							<Switch style={styles.switch} onValueChange={this.handleActivityPress} value={this.state.active} />
						</View> */}
					</View>
					<Button style={styles.buttonStyling} onPress={() => this.logout()} data-test="logout-btn">
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

export const mapDispatchToProps = dispatch => ({
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
