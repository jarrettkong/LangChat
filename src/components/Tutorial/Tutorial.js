import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-web-swiper';
import Drawer from '../NavDrawer/ NavDrawer';
const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		zIndex: 1
	},
	slideContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		zIndex: 1
	},
	slide1: {
		backgroundColor: 'rgba(20,20,200,0.3)'
	},
	slide2: {
		backgroundColor: 'rgba(20,200,20,0.3)'
	},
	slide3: {
		backgroundColor: 'rgba(200,20,20,0.3)'
	}
});

export default class Tutorial extends React.Component {
	render () {
		return (
			<View style={styles.container}>
				<Swiper>
					<View style={[ styles.slideContainer, styles.slide1 ]}>
						<Text>Slide 1</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide2 ]}>
						<Text>Slide 2</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide3 ]}>
						<Text>Slide 3</Text>
					</View>
				</Swiper>
			</View>
		);
	}
}
