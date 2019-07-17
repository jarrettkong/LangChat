import React from 'react';
import { View, Text } from 'react-native';
import Message from '../Message/Message';

const MessageView = props => {
	return <View>{props.messages.map(message => <Message key={message.id} {...message} />)}</View>;
};

export default MessageView;
