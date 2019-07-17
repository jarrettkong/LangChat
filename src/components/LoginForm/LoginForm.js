import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from '../common';
import { Actions } from 'react-native-router-flux';
import { MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../../actions/index';

class LoginForm extends Component {
  
  handleChange = (text, input) => {
    if( input === "emailChanged" ) {
      this.props.emailChanged(text);
    } else {
      this.props.passwordChanged(text);
    }
  }

	render () {
    const { containerStyle, inputContainerStyle, textHeaderStyle, buttonContainerStyle } = styles;
    console.log(this.props.email)
    console.log(this.props.password)
		return (
			<View style={containerStyle}>
				<EvilIcons name="close" size={40} onPress={() => Actions.splashPage()} style={{ width: '13%' }} />
				<Text style={textHeaderStyle}>Log In</Text>
				<View style={inputContainerStyle}>
					<Input
						label={<MaterialCommunityIcons name="email-outline" size={30} color="#999" />}
            placeholder="Email"
            value={this.props.email}
            onChangeText={email => this.handleChange(email, "emailChanged")}
            required
					/>
				</View>
				<View style={inputContainerStyle}>
					<Input
						label={<AntDesign name="lock" size={30} color="#999" />}
						placeholder="Password"
            secureTextEntry
            value={this.props.password}
						onChangeText={password => this.handleChange(password, "passwordChanged")}
					/>
				</View>
				<View style={buttonContainerStyle}>
					<Button>Log In</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	inputContainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 50
	},
	textHeaderStyle: {
		fontSize: 30,
		fontWeight: '600',
		paddingTop: 30,
		paddingBottom: 40
	},
	buttonContainerStyle: {
		marginTop: 80
	}
};

export const mapStateToProps = state => ({
	email: state.auth.email,
	password: state.auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
