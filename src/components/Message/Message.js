import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = props => {
	const { username, text } = props;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.username}>{username}</Text>
			</View>
			<View>
				<Text style={styles.messageText}>{text}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
    paddingTop: 5,
    paddingBottom:5
	},
	username: {
		fontWeight: '500',
		fontSize: 16,
		marginBottom: 7
	},
	messageText: {
		fontSize: 16
	}
});

export default Message;
