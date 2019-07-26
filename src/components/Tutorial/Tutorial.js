import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';

export default class Tutorial extends React.Component {
	render () {
		return (
			<SafeAreaView style={styles.container}>
				<Swiper>
					<View style={[ styles.slideContainer, styles.slide1 ]}>
						<Image style={styles.imageStyle} source={{ uri: 'https://i.imgur.com/ODVGwz9.gif' }} />
					</View>
					<View style={[ styles.slideContainer, styles.slide2 ]}>
						<Image style={styles.imageStyle} source={{ uri: 'https://i.imgur.com/sfw9qgf.gif' }} />
					</View>
					<View style={[ styles.slideContainer, styles.slide3 ]}>
						<Image style={styles.imageStyle} source={{ uri: 'https://i.imgur.com/C3WVMOy.gif' }} />
						<TouchableOpacity onPress={() => Actions.welcome()} style={styles.buttonStyle}>
							<Text style={styles.textStyle}>Start Chatting!</Text>
						</TouchableOpacity>
					</View>
				</Swiper>
			</SafeAreaView>
		);
	}
}
