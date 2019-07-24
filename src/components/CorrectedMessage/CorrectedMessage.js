import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
const CorrectedMessage = props => {
	return (
		<View>
			<Text>
				<Ionicons name="md-close" size={20} />
				{props.reference.message}
			</Text>
			<Text>
				<Ionicons name="ios-checkmark" />
				{props.message}
			</Text>
		</View>
	);
};

CorrectedMessage.propTypes = {
	reference: PropTypes.object.isRequired,
	message: PropTypes.string.isRequired
}


export default CorrectedMessage;
