import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingTop: 5,
		paddingBottom: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center'
	},
	username: {
		fontWeight: '500',
		fontSize: 16
	},
	messageText: {
		fontSize: 16,
		flex: 1,
		flexWrap: 'wrap'
	},
	initialContainer: {
		width: 35,
		height: 35,
		marginRight: 15,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center'
	},
	initials: {
		fontSize: 20,
		textAlign: 'center'
	}
});
