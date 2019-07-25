import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export class Nav extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<TouchableHighlight underlayColor="#4765A9" onPress={() => Actions.profile()} data-test='profile-btn'>
						<FontAwesome style={styles.profileButton} name="user" size={40} />
					</TouchableHighlight>
				</View>

				<TouchableHighlight
					underlayColor="#4765A9"
					onPress={() => Actions.chatRoomFrench({ language: 'french', roomId: 1, languageId: 1 })}>
					<Text Text style={styles.button}>
						chatroom french
					</Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="#4765A9"
					onPress={() => Actions.chatRoomSpanish({ language: 'spanish', roomId: 2, languageId: 2 })}>
					<Text Text style={styles.button}>
						chatroom spanish
					</Text>
				</TouchableHighlight>

				<TouchableHighlight underlayColor="#4765A9" onPress={() => Actions.tutorial()}>
					<Text Text style={styles.button}>
						tutorial
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default Nav;
