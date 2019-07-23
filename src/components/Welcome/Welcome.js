import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import { connect } from 'react-redux';

class Welcome extends Component {
	render () {
		return (
			<View style={styles.container}>
				<NavDrawer>
					<Text style={styles.welcomeText}>Welcome back {this.props.user.username}!</Text>
				</NavDrawer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1.0,
	},
	welcomeText: {
		fontSize: 18,
		flex: 1.0,
		alignSelf:'center',
		justifyContent: 'center',
		marginTop: 50
	},
	

});
export const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Welcome);
