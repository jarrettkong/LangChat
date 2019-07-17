import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Message from '../Message/Message';

const MessageView = props => {
	return (
		<View style={styles.MessageView}>{props.messages.map(message => <Message key={message.id} {...message} />)}</View>
	);
};

const styles = StyleSheet.create({
	MessageView: {
		borderColor: 'red',
		borderWidth: 1,
    flex: 1,
    height: 200
	}
});

export default MessageView;
