import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import Button from '../common/Button';

export default class Tutorial extends React.Component {
	render () {
		return (
			<View style={styles.container}>
				<Swiper>
					<View style={[ styles.slideContainer, styles.slide1 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/tut_2.png')} />
						<Text style={styles.tutorialText}>
							Click the menu at the top left of the screen to open the navigation and join a chatroom!
						</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide2 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/tut_1.jpg')} />
						<Text style={styles.tutorialText}>Send messages and chat with other users to learn!</Text>
					</View>
					<View style={[ styles.slideContainer, styles.slide3 ]}>
						<Image style={styles.imageStyle} source={require('../../../assets/tut_3.jpg')} />
						<Text style={styles.tutorialText}>Edit user messages to help others learn!</Text>
						<Button onPress={() => Actions.welcome()}>Start chatting!</Button>
					</View>
				</Swiper>
			</View>
		);
	}
}
