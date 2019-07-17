import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChatRoom from '../ChatRoom/ChatRoom';
import Tutorial from '../Tutorial/Tutorial'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.Home}>
				<Tutorial />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Home: {
		flex: 1
	}
});
