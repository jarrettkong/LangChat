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
						<Text style={styles.inputContainerStyle}>{this.state.firstName}</Text>
						<Text style={styles.inputContainerStyle}>{this.state.lastName}</Text>
						<Text style={styles.inputContainerStyle}>{this.state.userName}</Text>
						<Text style={styles.inputContainerStyle}>{this.state.password}</Text>
						<Text style={styles.inputContainerStyle}>{this.state.country}</Text>
						<Text style={styles.inputContainerStyle}>{this.state.email}</Text>
					</View>
				) : (
					<View>
						<TextInput style={styles.inputContainerStyle} label="First Name">
							{this.state.firstName}
						</TextInput>
						<TextInput style={styles.inputContainerStyle} label="Last Name">
							{this.state.lastName}
						</TextInput>
						<TextInput style={styles.inputContainerStyle} label="Username">
							{this.state.userName}
						</TextInput>
						<TextInput style={styles.inputContainerStyle} label="Password">
							{this.state.password}
						</TextInput>
						<TextInput style={styles.inputContainerStyle} label="Country">
							{this.state.country}
						</TextInput>
						<TextInput style={styles.inputContainerStyle} label="Email">
							{this.state.email}
						</TextInput>
					</View>
				)}

				<Button title="edit" onPress={this.handlePress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
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
