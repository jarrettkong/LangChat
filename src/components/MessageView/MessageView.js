import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Message from '../Message/Message';

const MessageView = props => {
	return (
		<ScrollView
			ref={ref => (this.scrollView = ref)}
			style={styles.MessageView}
			alwaysBounceVertical
			keyboardDismissMode="on-drag"
			onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
		>
			{props.messages.map(message => <Message key={message.id} message={message} />)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	MessageView: {
		backgroundColor: '#fff',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 15,
		flex: 4
	}
});

export default MessageView;
