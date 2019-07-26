import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './styles';

export class Welcome extends Component {
	render () {
		return (
			<View style={styles.container}>
				<NavDrawer>
					<Image style={styles.imageStyle} source={require('../../../assets/group_learning.jpg')} />
					<Text style={styles.welcomeText}>
						Welcome back <Text style={styles.offColor}>{this.props.user.username}</Text>! {'\n'}
						{'\n'}
						Join a chatroom to start learning.
					</Text>
				</NavDrawer>
			</View>
		);
	}
}
Welcome.propTypes = {
	user: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Welcome);
