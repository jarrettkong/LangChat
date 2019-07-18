import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import MessageView from '../MessageView/MessageView';
import MessageInput from '../MessageInput/MessageInput';
import { Input, Button } from '../common';
import { addMessage } from '../../actions';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
		this.connection = new WebSocket(`http://langchat-crosspollination.herokuapp.com/ws/${this.props.roomId}`);
	}

	componentDidMount() {
		this.connect();
	}

	connect = () => {
		this.connection.onopen = () => {
			console.log('connected');
		};
		this.connection.onmessage = message => {
			console.log('message received');
		};
		this.connection.onerror = error => {
			console.log('error');
		};
		this.connection.onclose = () => {
			// this.props.sendMessage(this.state.message);
			console.log('disconnected');
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
					<Input
						style={styles.messageInput}
						placeholder="Enter your message here..."
						value={this.state.message}
						onChangeText={message => this.setState({ message })}
					/>
					<View>
						<Button onPress={this.sendMessage} style={styles.sendButton}>
							S
						</Button>
					</View>
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
		height: 40
	},
	messageInput: {
		borderColor: 'blue',
		borderWidth: 1
	},
	sendButton: {
		width: 40,
		height: 40
	}
});

export const mapStateToProps = state => ({
	messages: state.messages
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
