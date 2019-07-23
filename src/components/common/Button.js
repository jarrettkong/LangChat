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
		position: 'absolute',
		alignSelf: 'stretch',
		width: '90%',
		backgroundColor: '#007aff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginTop: 20,
		marginLeft: 5,
		marginRight: 5,
		alignSelf: 'center',
		top: '84%'
	}
};

export default Button;
