import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Nav from '../Nav/Nav';
console.disableYellowBox = true;

export default class NavDrawer extends Component {
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

	render () {
		return (
			<SafeAreaView style={styles.safeAreaStyle}>
				<StatusBar barStyle="light-content" />
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
							<TouchableOpacity style={styles.menuButton} onPress={this.openDrawer}>
								{this.state.drawerOpen ? (
									<AntDesign name="menu-unfold" style={styles.menuIcon} size={25} onPress={this.openDrawer} />
								) : (
									<AntDesign name="menu-fold" style={styles.menuIcon} size={25} onPress={this.openDrawer} />
								)}
							</TouchableOpacity>
							<Text style={styles.headerTitle}>LangChat</Text>
							<View style={styles.menuButton} />
						</View>
						{this.props.children || null}
					</Drawer>
				</View>
			</SafeAreaView>
		);
	}
}

const drawerStyles = {
	drawer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	main: {
		flex: 1.0,
		backgroundColor: 'white'
	}
};

const styles = {
	mainContainer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	safeAreaStyle: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	headerContainer: {
		position: 'relative',
		alignItems: 'center',
		height: 44,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#3B5998'
	},
	headerTitle: {
		flex: 1.0,
		textAlign: 'center',
		alignSelf: 'center',
		color: 'white'
	},
	menuButton: {
		marginLeft: 8,
		marginRight: 8,
		alignSelf: 'center',
		tintColor: 'white'
	},
	menuContainer: {
		flex: 1.0,
		backgroundColor: '#3B5998'
	},
	menuTitleContainer: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItem: 'center'
	},
	menuTitle: {
		width: '100%',
		color: 'white',
		fontSize: 17,
		alignSelf: 'center',
		textAlign: 'center'
	},
	menuIcon: {
		color: 'white'
	}
};
