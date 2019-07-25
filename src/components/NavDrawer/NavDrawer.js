import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { logout, handleError } from '../../actions';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import { drawerStyles, styles } from './styles';

console.disableYellowBox = true;

export class NavDrawer extends Component {
	state = {
		drawerOpen: false
	};

	renderDrawer () {
		return (
			<View style={styles.menuContainer}>
				<Nav />
			</View>
		);
	}

	openDrawer = () => {
		this.drawer.open();
	};

	closeDrawer = () => {
		this.drawer.close();
	};

	toggleDrawer = () => {
		const { drawerOpen } = this.state;
		this.setState({ drawerOpen: !drawerOpen });
	};

	logout = async () => {
		try {
			const { username, password } = this.props;
			await fetch('https://langchat-crosspollination.herokuapp.com/api/v1/log_out/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRFToken': this.props.cookie,
					Authorization: `Token ${this.props.token}`
				},
				body: JSON.stringify({ username, password })
			});
			this.props.logout();
			Actions.splashPage();
		} catch (error) {
			this.props.handleError(error.message)
		}
	};

	render () {
		return (
			<SafeAreaView style={styles.safeAreaStyle}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.mainContainer}>
					<Drawer
						ref={ref => (this.drawer = ref)}
						content={this.renderDrawer()}
						type="static"
						onOpen={this.toggleDrawer}
						onClose={this.toggleDrawer}
						tapToClose={true}
						openDrawerOffset={0.25}
						styles={drawerStyles}>
						<View style={styles.headerContainer}>
							<TouchableOpacity style={styles.menuButton} onPress={this.openDrawer} style={styles.menuIcon}>
								{this.state.drawerOpen ? (
									<AntDesign
										name="menu-unfold"
										style={styles.menuIcon}
										size={25}
										onPress={() => this.openDrawer()}
										data-test="close-drawer-btn"
									/>
								) : (
									<AntDesign
										name="menu-fold"
										style={styles.menuIcon}
										size={25}
										onPress={() => this.openDrawer()}
										data-test="open-drawer-btn"
									/>
								)}
							</TouchableOpacity>
							<Text style={styles.headerTitle}>{this.props.name || 'LangChat'}</Text>
							<View style={styles.menuButton} />
						</View>
						{this.props.children || null}
					</Drawer>
				</View>
			</SafeAreaView>
		);
	}
}

NavDrawer.propTypes = {
	logout: PropTypes.func.isRequired,
	cookie: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired
};

export const mapStateToProps = state => ({
	cookie: state.cookie,
	username: state.auth.username,
	password: state.auth.password,
	token: state.token
});

export const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
