import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import Spinner from '../common/Spinner';

export default class Tutorial extends React.Component {
	state = { loading: true };

	handleImageLoaded () {
		this.setState({ loading: false });
	}

	render () {
		return (
			<SafeAreaView style={styles.container}>
				<Swiper>
					<View style={[ styles.slideContainer, styles.slide1 ]}>
						<Image
							style={styles.imageStyle}
							onLoad={() => this.handleImageLoaded()}
							source={{ uri: 'https://i.imgur.com/ODVGwz9.gif' }}
						/>
						{this.state.loading && (
							<View style={{position: "absolute", top: 350}}>
								<Spinner />
							</View>
						)}
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
