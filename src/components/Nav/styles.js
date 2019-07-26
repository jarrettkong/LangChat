import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		marginTop: 5,
		color: 'white'
	},
	profileIcon: {
		marginLeft: 10
	},
	button: {
		width: '100%',
		height: 40,
		justifyContent: 'flex-start',
		paddingLeft: 10,
		alignItems: 'center',
		flexDirection: 'row'
	},
	buttonTitle: {
		fontSize: 18,
		color: '#fff',
		paddingLeft: 10
	},
	profileContainer: {
		marginTop: 10
	},
	profileButton: {
		color: '#E8EAEF',
		width: '100%',
		textAlign: 'left',
		padding: 10,
		marginRight: 10
	},
	navHeader: {
		color: 'grey',
		padding: 10,
		fontSize: 20,
		borderBottomColor: 'grey',
		borderBottomWidth: 2
	}
});
