import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from '../common';
import { addMessage } from '../../actions';
import { connect } from 'react-redux';

class MessageInput extends Component {
	state = {
		message: ''
	};

	sendMessage = () => {
		// this.props.sendMessage(this.state.message);
		const newMessage = { id: Date.now(), username: 'Jarrett', text: this.state.message };
		this.props.addMessage(newMessage);
		this.setState({ message: '' });
	};

	render() {
		return (
			<View style={styles.Message}>
				<KeyboardAvoidingView style={styles.keyboard} behavior="padding">
					<Input
						placeholder="Enter your message here..."
						value={this.state.message}
						onChangeText={message => this.setState({ message })}
					/>
					<View>
						<Button onPress={this.sendMessage}>Send</Button>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Message: {
		flex: 1
	},
	keyboard: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	}
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message))
});

export default connect(null, mapDispatchToProps)(MessageInput);
