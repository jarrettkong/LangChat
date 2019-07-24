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
	slide1: {
		backgroundColor: 'rgba(20,20,200,0.3)'
	},
	slide2: {
		backgroundColor: 'rgba(20,200,20,0.3)'
	},
	slide3: {
		backgroundColor: 'rgba(200,20,20,0.3)'
	},
	imageStyle: {
		height: '70%',
		width: '100%',
		opacity: 0.8
	}
});
