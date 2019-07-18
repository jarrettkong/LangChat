import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
				placeholder={placeholder}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		width: '100%'
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 10,
		paddingRight: 10
	},
	containerStyle: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
