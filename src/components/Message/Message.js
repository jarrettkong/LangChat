import React from 'react';
import { View, Text } from 'react-native';

const Message = props => {
	const { username, text } = props;
	return (
		<View>
			<Text>
				{username}: {text}
			</Text>
		</View>
	);
};

export default Message;
