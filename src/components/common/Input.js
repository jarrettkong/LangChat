import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, container } = styles;

	return (
		<View style={container}>
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
		margin: 'auto',
		lineHeight: 23,
		height: '100%',
		width: '95%'
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 10,
		paddingRight: 10
	},
	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		width: '90%'
	}
};

export default Input;
