import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	inputContainerStyle: {
		backgroundColor: '#fff',
		alignSelf: 'center',
		flexDirection: 'column',
		width: '90%',
		margin: 10,
		borderRadius: 5
	},
	container: {
		backgroundColor: '#323232',
		flex: 1,
		width: '100%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		paddingTop: 50,
		position: 'relative'
	},
	textHeaderStyle: {
		fontSize: 50,
		fontWeight: '600',
		color: 'white',
		margin: 40,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	buttonContainerStyle: {
		// marginTop: 80
	}
});
