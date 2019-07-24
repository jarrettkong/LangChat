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
		backgroundColor: '#fff',
		borderBottomColor: '#3B5998',
		borderBottomWidth: 1.2
	},
	headerTitle: {
		flex: 1.0,
		textAlign: 'center',
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 22
	},
	menuButton: {
		marginLeft: 8,
		marginRight: 8,
		alignSelf: 'center',
		tintColor: 'white'
	},
	menuContainer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	menuTitleContainer: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItem: 'center'
	},
	menuTitle: {
		width: '100%',
		color: 'white',
		fontSize: 17,
		alignSelf: 'center',
		textAlign: 'center'
	},
	menuIcon: {
		color: '#007aff'
	}
};

export const drawerStyles = {
	drawer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	main: {
		flex: 1.0,
		backgroundColor: 'white'
	}
};
