import React, { Component } from 'react';
import { View } from 'react-native';
import Welcome from '../Welcome/Welcome';
import Tutorial from '../Tutorial/Tutorial';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './styles'

export class Home extends Component {
	render () {
		return (
			<View style={styles.container}>
				{this.props.user.is_active ? <Welcome username={this.props.user.username} /> : <Tutorial />}
			</View>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Home);
