import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Tutorial from '../Tutorial/Tutorial';
import Welcome from '../Welcome/Welcome';
export default class Home extends Component {
	render () {
		return (
			<View>
				<Tutorial />
			</View>
		);
	}
}
const styles = {};
