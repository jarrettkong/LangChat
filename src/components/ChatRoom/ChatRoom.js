import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.connection = new WebSocket('url');
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
		return (
			<View>
				<Text> ChatRoom </Text>
				<MessageView messages={this.props.messages} />
				<MessageInput sendMessage={this.sendMessage} />
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	messages: state.messages
});

export default connect(mapStateToProps)(ChatRoom);
