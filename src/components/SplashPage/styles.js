import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	textStyle: {
		fontSize: 70,
		fontWeight: 'bold',
		color: '#323232'
	},
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center'
	},
	imageStyle: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	flexContainer: {
		position: 'absolute',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		paddingTop: 75,
		paddingBottom: 75,
		width: '100%',
		alignSelf: 'center'
	},
	logInContainerStyle: {
		justifyContent: 'center',
		fontWeight: '600',
		flexDirection: 'row',
		width: '100%'
	},
	logInTextStyle: {
		fontSize: 16,
		color: '#323232'
	},
	logInButtonStyle: {
		fontSize: 16,
		color: '#323232',
		marginLeft: 8,
		textDecorationLine: 'underline'
	}
});
