import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import MessageView from '../MessageView/MessageView';
import { Ionicons } from '@expo/vector-icons';
import { addMessage } from '../../actions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NavDrawer from '../NavDrawer/ NavDrawer';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '', loading: false };
		this.socket = new WebSocket(
			`wss://langchat-crosspollination.herokuapp.com/ws/${this.props.language}/?token=${this.props.token}`
		);
	}

	componentDidMount() {
		console.log('mounting...');
		this.setState({ loading: true }, () => {
			this.connect();
		});
	}

	componentWillUnmount() {
		this.socket.close();
	}

	connect = () => {
		this.socket.onopen = () => {
			console.log(`connected to ${this.props.language} chat...`);
			this.setState({ loading: false });
		};

		this.socket.onmessage = message => {
			const newMessage = JSON.parse(message.data);
			this.props.addMessage(JSON.parse(newMessage.message));
		};

		this.socket.onerror = error => {
			console.log('error: ', error.message);
		};

		this.socket.onclose = () => {
			console.log('disconnected...');
		};
	};

	sendMessage = () => {
		try {
			const message = {
				user_id: this.props.user.id,
				room_id: this.props.roomId,
				language_id: this.props.languageId,
				username: this.props.user.username,
				message: this.state.message,
				token: this.props.token
			};
			this.socket.send(JSON.stringify(message));
			this.setState({ message: '' });
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		const messages = this.props.messages.filter(message => message.room === this.props.roomId);
		return (
			<KeyboardAvoidingView style={styles.ChatRoom} behavior="padding" keyboardVerticalOffset={40} enabled>
				<NavDrawer>
					{this.state.loading ? (
						<Text>Loading...</Text>
					) : (
						<React.Fragment>
							<MessageView messages={messages} />
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.messageInput}
									placeholder="Enter your message here..."
									value={this.state.message}
									onChangeText={message => this.setState({ message })}
								/>
								<TouchableWithoutFeedback
									style={styles.sendButton}
									onPress={this.sendMessage}
									disabled={!this.state.message.length}
								>
									<Ionicons name="ios-send" size={35} color="#000" />
								</TouchableWithoutFeedback>
							</View>
						</React.Fragment>
					)}
				</NavDrawer>
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
	messages: state.messages,
	user: state.user,
	token: state.token
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
