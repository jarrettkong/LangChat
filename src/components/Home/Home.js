import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Drawer from '../NavDrawer/ NavDrawer';
import Welcome from '../Welcome/Welcome';
export default class Home extends Component {
	render () {
		// ! add conditional to toggle between new user and existing user
		// Todo new user should route to tutorial, existing to welcome
		return (
			<View style={styles.container}>
				<Welcome></Welcome>
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
