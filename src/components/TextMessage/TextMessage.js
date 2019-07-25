import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TextMessage = props => {
	return <Text style={styles.container}>{props.message}</Text>;
};
TextMessage.propTypes = {
	message: PropTypes.string
};
export default TextMessage;
