import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from '../common';

class MessageInput extends Component {
	state = {
		message: ''
	};

	sendMessage = () => {
		this.props.sendMessage(this.state.message);
		this.setState({ message: '' });
	};

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
				<Input placeholder="Enter your message here..." onChangeText={message => this.setState({ message })} />
				<View>
					<Button onPress={this.sendMessage}>Send</Button>
				</View>
			</View>
		);
	}
}

export default MessageInput;
