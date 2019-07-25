import { StyleSheet } from 'react-native';

const lightgrey = '#d4d4d4';

export default StyleSheet.create({
	quote: {
		marginTop: 5,
		marginBottom: 5,
		padding: 5,
		paddingLeft: 10,
		borderColor: lightgrey,
		borderWidth: 1,
		borderRadius: 3
	},
	correction: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '95%'
	},
	correctionText: {
		marginLeft: 10
	}
});
