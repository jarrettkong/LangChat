import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SignUpForm, { mapDispatchToProps } from '../SignUpForm/SignUpForm';

export class Tutorial extends React.Component {
	render () {
		console.log(this.props);

		return (
			<View style={styles.container}>
				<View>
					<Text>Profile top</Text>
				</View>
				<View>
					<Text>Profile bottom</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
