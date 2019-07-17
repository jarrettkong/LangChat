import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MessageView from '../MessageView/MessageView';
import MessageInput from '../MessageInput/MessageInput';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {};
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
			console.log('disconnected');
			// this.connect()
		};
	};

	sendMessage = message => {
		console.log(message);
	};

	render() {
		// const messages = this.props.messages.filter(message => message.room_id === this.props.roomId);
		return (
			<View style={styles.ChatRoom}>
				<MessageView messages={this.props.messages} />
				<MessageInput sendMessage={this.sendMessage} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ChatRoom: {
		alignContent: 'space-between',
		flex: 1
	}
});

export const mapStateToProps = state => ({
	messages: state.messages
});

export default connect(mapStateToProps)(ChatRoom);
