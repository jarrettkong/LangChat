import React from 'react';
import { View, Text } from 'react-native';

const Message = props => {
	const { displayName, textOriginal } = props;
	return (
		<View>
			<Text>
				{displayName}: {textOriginal}
			</Text>
		</View>
	);
};

export default Message;
