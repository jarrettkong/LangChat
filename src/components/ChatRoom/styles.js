import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	ChatRoom: {
		alignContent: 'flex-end',
		flex: 1
	},
	inputContainer: {
		borderTopWidth: 1,
		borderTopColor: '#f3f3f3',
		justifyContent: 'space-between',
		height: 45,
		flexDirection: 'row',
		alignContent: 'flex-start'
	},
	messageInput: {
		alignContent: 'center',
		borderColor: 'blue',
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 15,
		fontSize: 16
	},
	sendButton: {
		width: 45,
		height: 45,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center'
	},
	stopCorrectingButton: {
		backgroundColor: 'red',
		borderRadius: 100,
		height: 35,
		width: 35,
		justifyContent: 'center',
		position: 'absolute',
		bottom: 50,
		left: 5,
		alignItems: 'center'
	}
});
