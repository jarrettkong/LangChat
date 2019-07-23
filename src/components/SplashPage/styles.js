import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	textStyle: {
		fontSize: 70,
		fontWeight: 'bold',
		color: '#fff'
	},
	container: {
		flex: 1,
		position: 'relative'
	},
	imageStyle: {
		flex: 1,
		backgroundColor: '#000',
		opacity: 0.9,
		width: '100%'
	},
	flexContainer: {
		position: 'absolute',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		paddingTop: 60,
		paddingBottom: 60,
		width: '90%',
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
		color: '#fff'
	},
	logInButtonStyle: {
		fontSize: 16,
		color: '#fff',
		marginLeft: 8,
		textDecorationLine: 'underline'
	}
});
