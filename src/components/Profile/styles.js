import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1.0,
		backgroundColor: 'white'
	},
	profileContainer: {
		flexDirection: 'row',
		paddingTop: 40,
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	imageStyle: {
		marginRight: 20,
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#323232'
	},
	inputContainerStyle: {
		marginTop: 5,
		flexDirection: 'row',
		fontSize: 16,
		marginRight: 10
	},
	infoContainer: {
		flexDirection: 'row',
		marginTop: 15,
		padding: 10,
		borderBottomColor: '#323232',
		borderBottomWidth: 1
	},
	mainInfoContainer: {
		marginTop: 10,
		flex: 0.5,
		marginBottom: 100,
		padding: 30,
		justifyContent: 'center'
	},
	label: {
		color: '#323232',
		fontSize: 18,
		fontWeight: 'bold',
		margin: 10
	},
	switch: {
		marginTop: 10
	},
	switchContainer: {
		marginTop: 10
	}
});
