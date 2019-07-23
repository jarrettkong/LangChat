import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CorrectedMessage = props => {
	return (
		<View>
			<Text>
				<Ionicons name="md-close" size={20} />
				{props.reference.message}
			</Text>
			<Text>
				<Ionicons name="ios-checkmark" size={20}/>
				{props.message}
			</Text>
		</View>
	);
};

export default CorrectedMessage;
