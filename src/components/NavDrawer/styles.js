import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	mainContainer: {
		flex: 1.0,
		backgroundColor: '#fff'
	},
	safeAreaStyle: {
		flex: 1.0,
		backgroundColor: '#fff'
	},
	headerContainer: {
		position: 'relative',
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		borderBottomColor: '#a7a7a7',
		borderBottomWidth: 1
	},
	headerTitle: {
		flex: 1.0,
		position: 'absolute',
		textAlign: 'center',
		alignSelf: 'center',
		color: '#323232',
		fontSize: 22
	},
	menuButton: {
		alignSelf: 'center',
		tintColor: 'white',
		marginLeft: 5
	},
	menuContainer: {
		flex: 1.0,
		backgroundColor: '#323232'
	},
	menuTitleContainer: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute'
	},
	menuTitle: {
		width: '100%',
		color: 'white',
		fontSize: 17,
		alignSelf: 'center',
		textAlign: 'center',
		marginRight: '2%'
	},
	menuIcon: {
		color: '#323232',
		zIndex: 9999,
		marginTop: 2,
		marginLeft: 5,
		alignSelf: 'flex-start',
		justifyContent: 'center',
		flex: 1.0
	}
});

export const drawerStyles = {
	drawer: {
		flex: 1.0
	},
	main: {
		flex: 1.0,
		backgroundColor: 'white'
	}
};
