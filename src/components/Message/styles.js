import { StyleSheet } from 'react-native';

const lightgrey = '#a7a7a7';
const darkgrey = '#323232';

export default StyleSheet.create({
	container: {
		paddingTop: 13,
		paddingBottom: 13,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center',
		borderTopWidth: 1,
		borderColor: '#f3f3f3'
	},
	username: {
		fontWeight: '500',
		fontSize: 16,
		color: darkgrey
	},
	initialContainer: {
		width: 35,
		height: 35,
		marginRight: 15,
		marginTop: 1,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: lightgrey,
		justifyContent: 'center'
	},
	initials: {
		fontSize: 20,
		textAlign: 'center',
		color: lightgrey
	},
	timestamp: {
		color: lightgrey,
		fontWeight: '300',
		marginLeft: 10
	},
	messageHeader: {
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		flexDirection: 'row'
	}
});
