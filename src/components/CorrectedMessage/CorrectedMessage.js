import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const CorrectedMessage = props => {
	return (
		<View>
			<View style={styles.quote}>
				<Text style={{ fontStyle: 'italic', marginBottom: 5 }}>{props.reference.username} said:</Text>
				<View style={styles.correction}>
					<Ionicons name="md-close" color="#b30000" size={20} />
					<Text style={styles.correctionText}>{props.reference.message}</Text>
				</View>
			</View>
			<View style={{ ...styles.correction, paddingLeft: 10 }}>
				<Ionicons name="ios-checkmark" color="#339933" size={27} />
				<Text style={styles.correctionText}>{props.message}</Text>
			</View>
		</View>
	);
};

export default CorrectedMessage;
