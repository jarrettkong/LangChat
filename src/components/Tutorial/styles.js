import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around'
	},
	slideContainer: {
		flex: 1,
		alignItems: 'center',

		height: '100%',
		width: '100%',
		zIndex: 1
	},
	tutorialText: {
		fontSize: 18,
		marginTop: 30,
		marginBottom: 30
	},
	imageStyle: {
		marginTop: 50,
		height: '70%',
		width: '100%',
		opacity: 0.8
	},
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
});
