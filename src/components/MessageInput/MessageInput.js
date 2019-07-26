import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { styles } from './styles';
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



export default MessageInput;
