import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CorrectedMessage = props => {
	return (
		<View>
			<Text>
				{props.reference.username} said:{'\n'}
				<Ionicons name="md-close" color="#b30000" size={20} />
				{props.reference.message}
			</Text>
			<Text>
				<Ionicons name="ios-checkmark" color="#339933" size={30} />
				{props.message}
			</Text>
		</View>
	);
};

export default CorrectedMessage;
