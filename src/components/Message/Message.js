import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Message = props => {
	const { timestamp, username, id, setReferencedMessage } = props;
	const initial = username[0].toUpperCase();
	return (
		<TouchableWithoutFeedback onLongPress={() => setReferencedMessage(id)}>
			<View style={styles.container}>
				<View style={styles.initialContainer}>
					<Text style={styles.initials}>{initial}</Text>
				</View>
				<View style={{ width: '100%' }}>
					<View>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.username}>{timestamp}</Text>
					</View>
					<View style={{ width: '80%' }}>{props.children}</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
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
		width: 35,
		height: 35,
		marginRight: 15,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center'
	},
	initials: {
		fontSize: 20,
		textAlign: 'center'
	}
});

export default Message;
