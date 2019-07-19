import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import MessageView from '../MessageView/MessageView';
import { Ionicons } from '@expo/vector-icons';
import { addMessage } from '../../actions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
		this.connection;
	}

	componentDidMount() {
		this.connect();
	}

	connect = () => {
		this.connection = new WebSocket(`ws://langchat-crosspollination.herokuapp.com/ws/${this.props.language}`);
		this.connection.onopen = () => {
			console.log('connected');
		};
		this.connection.onmessage = message => {
			/*
      const data = JSON.parse(message.data)
      this.props.addMessage(message)
      */
			console.log('message received');
		};
		this.connection.onerror = error => {
			console.log('error');
		};
		this.connection.onclose = () => {
			console.log('disconnected');
			// this.connect();
		};
	};

	sendMessage = () => {
		const newMessage = { id: Date.now(), username: 'Jarrett', text: this.state.message };
		this.props.addMessage(newMessage);
		this.setState({ message: '' });
	};

	render() {
		// const messages = this.props.messages.filter(message => message.room_id === this.props.roomId);
		return (
			<KeyboardAvoidingView style={styles.ChatRoom} behavior="padding" keyboardVerticalOffset={40} enabled>
				<MessageView messages={this.props.messages} />
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.messageInput}
						placeholder="Enter your message here..."
						value={this.state.message}
						onChangeText={message => this.setState({ message })}
					/>
					<TouchableWithoutFeedback style={styles.sendButton} onPress={this.sendMessage}>
						<Ionicons name="ios-send" size={35} color="#000" />
					</TouchableWithoutFeedback>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	ChatRoom: {
		alignContent: 'flex-end',
		flex: 1
	},
	inputContainer: {
		justifyContent: 'space-between',
		height: 45,
		flexDirection: 'row',
		alignContent: 'flex-start'
	},
	messageInput: {
		alignContent: 'center',
		borderColor: 'blue',
		flex: 1,
		backgroundColor: '#fff',
    paddingLeft: 15,
    fontSize: 16
	},
	sendButton: {
		width: 45,
		height: 45,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export const mapStateToProps = state => ({
	messages: state.messages
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
