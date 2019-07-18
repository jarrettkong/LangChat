import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Drawer from '../Drawer/Drawer';
import Tutorial from '../Tutorial/Tutorial';
export default class Welcome extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Drawer>
                    <Tutorial/>
                </Drawer>
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
		// position: 'absolute',
		flex: 1.0,
		zIndex: 5
	},
	welcomeContainer: {
		position: 'absolute',
		flex: 1.0,
		zIndex: 1
	}
});
