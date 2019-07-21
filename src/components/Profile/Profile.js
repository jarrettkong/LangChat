import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class Profile extends React.Component {
	componentDidMount () {
		// redirect to splash or 404 if user doesn't exist
		// if (this.props.userName === '') Actions.splashPage();
	}
	constructor (props) {
		super(props);

		this.state = {
			password: 'password',
			firstName: 'max',
			lastName: 'silver',
			userName: 'maxbsilver',
			email: 'maxbsilver@gmail.com',
			country: 'USA',
			editing: false
		};
	}
	handlePress = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};
	render () {
		// console.log(this.props);
		// todo change this.state to props after login is saving in redux store
		return (
			<View style={styles.container}>
				{!this.state.editing ? (
					<View>
						<Text>{this.state.firstName}</Text>
						<Text>{this.state.lastName}</Text>
						<Text>{this.state.userName}</Text>
						<Text>{this.state.password}</Text>
						<Text>{this.state.country}</Text>
						<Text>{this.state.email}</Text>
					</View>
				) : (
					<View>
						<TextInput label='First Name'>{this.state.firstName}</TextInput>
						<TextInput label='First Name'>{this.state.lastName}</TextInput>
						<TextInput label='First Name'>{this.state.userName}</TextInput>
						<TextInput label='First Name'>{this.state.password}</TextInput>
						<TextInput label='First Name'>{this.state.country}</TextInput>
						<TextInput label='First Name'>{this.state.email}</TextInput>
					</View>
				)}

				<Button title="edit" onPress={this.handlePress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	container: {
		flex: 1
	},
	container: {
		flex: 1
	}
});

export const mapStateToProps = state => ({
	email: state.register.email,
	password: state.register.password,
	firstName: state.register.firstName,
	lastName: state.register.lastName,
	userName: state.register.userName,
	country: state.register.country
});

export default connect(mapStateToProps)(Profile);
