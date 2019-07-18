import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Input, Button } from '../common';
import { addMessage } from '../../actions';
import { connect } from 'react-redux';

class MessageInput extends Component {
	state = {
		message: ''
	};

	sendMessage = () => {};

	render () {
		return (
			<View style={styles.MessageInput}>
				<Input
					placeholder="Enter your message here..."
					value={this.state.message}
					onChangeText={message => this.setState({ message })}
				/>
				<View>
					<Button onPress={this.sendMessage}>Send</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MessageInput: {
		bottom: 0,
		left: 0,
		right: 0,
		position: 'absolute'
	}
});

export default MessageInput;
