import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TextMessage = props => {
	return <Text style={styles.container}>{props.message}</Text>;
};

export default TextMessage;
