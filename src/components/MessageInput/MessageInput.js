import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
			<View style={styles.ChatRoom}>
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
	ChatRoom: {
		paddingTop: 60
	}
});

export const mapDispatchToProps = dispatch => ({
	addMessage: message => dispatch(addMessage(message))
});

export default connect(null, mapDispatchToProps)(MessageInput);
