import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';

export class Nav extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<Text style={styles.navHeader}>User</Text>
					<TouchableHighlight
						underlayColor="#a7a7a7"
						style={styles.button}
						onPress={() => Actions.profile()}
						data-test="profile-btn"
					>
						<Text style={styles.buttonTitle}>Profile</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.tutorial()}>
					<Text style={styles.buttonTitle}>Tutorial</Text>
				</TouchableHighlight>
				<Text style={styles.navHeader}>Language Rooms</Text>
				<TouchableHighlight
					underlayColor="#a7a7a7"
					style={styles.button}
					onPress={() => Actions.chatRoomFrench({ language: 'french', roomId: 1, languageId: 1 })}
				>
					<React.Fragment>
						<Image
							source={require('../../../assets/flags/france.png')}
							style={{ height: 30, width: 30 }}
							resizeMode="center"
						/>
						<Text style={styles.buttonTitle}>French</Text>
					</React.Fragment>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="#a7a7a7"
					style={styles.button}
					onPress={() => Actions.chatRoomSpanish({ language: 'spanish', roomId: 2, languageId: 2 })}
				>
					<React.Fragment>
						<Image
							source={require('../../../assets/flags/spain.png')}
							style={{ height: 30, width: 30 }}
							resizeMode="center"
						/>
						<Text style={styles.buttonTitle}>Spanish</Text>
					</React.Fragment>
				</TouchableHighlight>
			</View>
		);
	}
}

export default Nav;
