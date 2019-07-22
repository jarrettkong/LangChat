import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavDrawer from '../NavDrawer/ NavDrawer';

class Welcome extends Component {
	render () {
		return (
			<View style={styles.container}>
				<NavDrawer>
					<Text>Welcome back user!</Text>
				</NavDrawer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		position: 'relative'
	},
	text: {
		fontSize: 50
	},
	drawerContainer: {
		flex: 1.0,
		zIndex: 5
	},
	welcomeContainer: {
		position: 'absolute',
		flex: 1.0,
		zIndex: 1
	}
});

export default Welcome;