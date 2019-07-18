import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Message from '../Message/Message';

// onScrollToTop={}
// pagingEnabled >
// maintainVisibleContentPosition={{ minIndexForVisible: 0, autoscollToTopThreshold: 0 }}

const MessageView = props => {
	return (
		<ScrollView
			ref={ref => (this.scrollView = ref)}
			style={styles.MessageView}
			alwaysBounceVertical
			keyboardDismissMode="on-drag"
			onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
		>
			{props.messages.map(message => <Message key={message.id} {...message} />)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	MessageView: {
		backgroundColor: '#fff',
		paddingLeft: 20,
		paddingRight: 20,
		flex: 4
	}
});

export default MessageView;
