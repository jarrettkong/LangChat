import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = props => {
	const { user, message, timestamp } = props;
	// const initial = username[0].toUpperCase();
	console.log(user, message, timestamp);
	return (
		<View style={styles.container}>
			<View style={styles.initialContainer}>
				<Text style={styles.initials}>{user}</Text>
				{/* <Text style={styles.initials}>{initial}</Text> */}
			</View>
			<View style={{ width: '100%' }}>
				<View>
					<Text style={styles.username}>{user}</Text>
					<Text style={styles.username}>{timestamp}</Text>
				</View>
				<View style={{ width: '80%' }}>
					<Text style={styles.messageText}>{message}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 5,
		paddingBottom: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center'
	},
	username: {
		fontWeight: '500',
		fontSize: 16
	},
	messageText: {
		fontSize: 16,
		flex: 1,
		flexWrap: 'wrap'
	},
	initialContainer: {
		width: 40,
		height: 40,
		marginRight: 15,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center'
	},
	initials: {
		fontSize: 22,
		textAlign: 'center'
	}
});

export default Message;
