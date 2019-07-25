import { StyleSheet } from 'react-native';

export const styles = {
	mainContainer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	safeAreaStyle: {
		flex: 1.0,
		backgroundColor: 'white'
	},
	headerContainer: {
		position: 'relative',
		alignItems: 'center',
		height: 44,
		flexDirection: 'row',
		justifyContent: 'center',
		borderBottomColor: '#323232',
		borderBottomWidth: 1.6
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
		tintColor: 'white'
	},
	menuContainer: {
		flex: 1.0,
		backgroundColor: '#323232'
	},
	menuTitleContainer: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItem: 'center',
		position: 'absolute'
	},
	menuTitle: {
		width: '100%',
		color: 'white',
		fontSize: 17,
		alignSelf: 'center',
		textAlign: 'center',
	},
	menuIcon: {
		color: '#323232',
    zIndex: 9999,
    marginTop: 1,
    alignSelf:'flex-start',
    justifyContent:'center',
    flex: 1.0
	}
};

export const drawerStyles = {
	drawer: {
		flex: 1.0
	},
	main: {
		flex: 1.0,
		backgroundColor: 'white'
	}
};
