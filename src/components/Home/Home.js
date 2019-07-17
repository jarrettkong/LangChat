import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChatRoom from '../ChatRoom/ChatRoom';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.Home}>
				<ChatRoom />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Home: {
		flex: 1
	}
});
