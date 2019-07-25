import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import MessageView from '../MessageView/MessageView';
import { Ionicons } from '@expo/vector-icons';
import { addMessage, addExistingMessages, handleError } from '../../actions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NavDrawer from '../NavDrawer/NavDrawer';
import PropTypes from 'prop-types';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
const WebSocket = require('ws');

export class ChatRoom extends Component {
	constructor (props) {
		super(props);
		this.state = {
			message: '',
			loading: false,
			referencedMessage: null
		};

		this.socket = new WebSocket(
			`wss://langchat-crosspollination.herokuapp.com/ws/${this.props.language}/?token=${this.props.token}`
		);
	}

	componentDidMount () {
		this.setState({ loading: true }, async () => {
			this.connect();
			await this.fetchMessages();
		});
	}

	componentWillUnmount () {
		this.socket.close();
	}

	fetchMessages = async () => {
		try {
			const res = await fetch(
				`https://langchat-crosspollination.herokuapp.com/api/v1/rooms/${this.props.roomId}/messages`
			);
			const data = await res.json();
			const messages = JSON.parse(data);
			this.props.addExistingMessages(messages);
		} catch (error) {
			this.props.handleError(error.message);
		}
	};

	setReferencedMessage = (id, message) => {
		this.setState({ referencedMessage: id, message });
	};

	clearReferencedMessage = () => {
		this.setState({ referencedMessage: null, message: '' });
	};

	connect = () => {
		this.socket.onopen = () => {
			// console.log(`connected to ${this.props.language} chat...`);
			this.setState({ loading: false });
		};

		this.socket.onmessage = message => {
			const newMessage = JSON.parse(message.data);
			this.props.addMessage(JSON.parse(newMessage.message));
		};

		this.socket.onerror = error => {
			console.log('error: ', error.message);
			Actions.errorPage();
		};

		this.socket.onclose = () => {
			console.log('disconnected...');
		};
	};

	sendMessage = () => {
		try {
			const message = {
				room_id: this.props.roomId,
				language_id: this.props.languageId,
				message: this.state.message,
				reference: this.state.referencedMessage || null
			};
			this.socket.send(JSON.stringify(message));
			this.setState({ message: '', referencedMessage: null });
		} catch (err) {
			this.props.handleError(err.message);
		}
	};

	render () {
		const messages = this.props.messages.filter(message => message.room === this.props.roomId);
		return (
			<KeyboardAvoidingView style={styles.ChatRoom} behavior="padding" enabled>
				<NavDrawer name={this.props.routeName}>
					{this.state.loading ? (
						<Text>Connecting...</Text>
					) : (
						<React.Fragment>
							<MessageView messages={messages} setReferencedMessage={this.setReferencedMessage} />
							{this.state.referencedMessage && (
								<TouchableHighlight
									onPress={() => this.clearReferencedMessage()}
									style={styles.stopCorrectingButton}
									data-test="close-edit-message">
									<Ionicons name="ios-close" size={35} color="#ffffff" />
								</TouchableHighlight>
							)}
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.messageInput}
									placeholder="Enter your message here..."
									value={this.state.message}
									onChangeText={message => this.setState({ message })}
									data-test='message-input'
								/>
								<TouchableWithoutFeedback
									style={styles.sendButton}
									onPress={() => this.sendMessage()}
									disabled={!this.state.message.length}
									data-test="send-message-btn">
									<Ionicons name="ios-send" size={35} color="#323232" />
								</TouchableWithoutFeedback>
							</View>
						</React.Fragment>
					)}
				</NavDrawer>
			</KeyboardAvoidingView>
		);
	}
}

export const mapStateToProps = state => ({
	messages: state.messages,
	user: state.user,
	token: state.token
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message)),
	addExistingMessages: messages => dispatch(addExistingMessages(messages)),
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
