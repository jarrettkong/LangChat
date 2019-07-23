import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabled}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 19,
		fontWeight: '600',
		paddingTop: 12,
		paddingBottom: 12
	},
	buttonStyle: {
		width: '90%',
		margin: 10,
		backgroundColor: '#007aff',
		borderRadius: 5,
		alignSelf: 'center'
	}
};

export default Button;
