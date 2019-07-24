import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Message = props => {
	const { timestamp, username, id, setReferencedMessage } = props;
	const initial = username[0].toUpperCase();
	return (
		<TouchableWithoutFeedback onLongPress={() => setReferencedMessage(id)}>
			<View style={styles.container}>
				<View style={styles.initialContainer}>
					<Text style={styles.initials}>{initial}</Text>
				</View>
				<View style={{ width: '100%' }}>
					<View>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.username}>{timestamp}</Text>
					</View>
					<View style={{ width: '80%' }}>{props.children}</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

Message.propTypes = {
	timestamp: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
};


export default Message;
