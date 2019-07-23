import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
class Welcome extends Component {
	render () {
		return (
			<View style={styles.container}>
				<NavDrawer>
					<Text style={styles.welcomeText}>
						<Text style={styles.offColor}>Welcome back</Text> {this.props.user.username}!
					</Text>
				</NavDrawer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1.0
	},
	welcomeText: {
		fontSize: 18,
		flex: 1.0,
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 50
	},
	offColor: {
		color: '#3B5998',
		fontWeight: 'bold',
		fontSize: 24
	}
});
export const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Welcome);
