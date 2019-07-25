import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const CorrectedMessage = props => {
	return (
		<View>
			<View style={styles.quote}>
				<Text style={{ fontStyle: 'italic' }}>{props.reference.username} said:</Text>
				<View style={styles.correction}>
					<Ionicons name="md-close" color="#b30000" size={20} />
					<Text style={styles.correctionText}>{props.reference.message}</Text>
				</View>
			</View>
			<View style={styles.correction}>
				<Ionicons name="ios-checkmark" color="#339933" size={30} />
				<Text style={styles.correctionText}>{props.message}</Text>
			</View>
		</View>
	);
};

CorrectedMessage.propTypes = {
	reference: PropTypes.object.isRequired,
	message: PropTypes.string.isRequired
}


export default CorrectedMessage;
