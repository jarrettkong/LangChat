import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Welcome from '../Welcome/Welcome';
import Tutorial from '../Tutorial/Tutorial';
import { connect } from 'react-redux';

class Home extends Component {
	render () {
		// ! add conditional to toggle between new user and existing user
		// Todo new user should route to tutorial, existing to welcome
		return (
			<View style={styles.container}>
				<Welcome />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		position: 'relative'
	}
});

export const mapStateToProps = state => ({
	user: state.currentUser
});

export default connect(mapStateToProps)(Home);
