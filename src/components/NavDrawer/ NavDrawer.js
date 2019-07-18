import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Drawer from 'react-native-drawer';
import { MaterialCommunityIcons, AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Nav from '../Nav/Nav';
console.disableYellowBox = true;

export default class NavDrawer extends Component {
	constructor (props) {
		super(props);
	}

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

	render () {
		return (
			<SafeAreaView style={styles.safeAreaStyle}>
				<View style={styles.mainContainer}>
					<Drawer
						ref={ref => (this.drawer = ref)}
						content={this.renderDrawer()}
						type="static"
						tapToClose={true}
						openDrawerOffset={0.25}
						styles={drawerStyles}>
						<View style={styles.headerContainer}>
							<TouchableOpacity style={styles.menuButton} onPress={this.openDrawer}>
								<Ionicons name="ios-menu" style={styles.menuIcon} size={40} onPress={this.openDrawer} />
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
		backgroundColor: 'white'
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
		alignItem: 'center',
		height: 60,
		width: '100%',
		flexDirection: 'row'
	},
	menuTitle: {
		width: '100%',
		color: 'white',
		textAlign: 'center',
		fontSize: 17,
		alignSelf: 'center'
	},
	menuIcon: {
		color: 'white'
	}
};
