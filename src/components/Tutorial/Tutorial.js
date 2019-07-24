import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Actions } from 'react-native-router-flux';
import { Styles } from './styles';
export default class Tutorial extends React.Component {
	render () {
		return (
			<View style={styles.container}>
				<Swiper>
					<View style={[ styles.slideContainer, styles.slide1 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/talking.jpg')} />
						<Text>Slide 1</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide2 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/learn_with_others.jpg')} />
						<Text>Slide 2</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide3 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/group_learning.jpg')} />
						<Text>Slide 3</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide4 ]}>
						<Button title="Go home" onPress={() => Actions.welcome()} />
					</View>
				</Swiper>
			</View>
		);
	}
}
