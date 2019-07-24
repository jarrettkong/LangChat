import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Welcome from '../Welcome/Welcome';
import Tutorial from '../Tutorial/Tutorial';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
	render () {
		return (
			<View style={styles.container}>
				{this.props.user.is_active ? <Welcome username={this.props.user.username} /> : <Tutorial />}
			</View>
		);
	}
}

Home.PropTypes = {
	user: PropTypes.object
}

const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		position: 'relative',
		backgroundColor: 'white'
	}
});

export const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Home);
