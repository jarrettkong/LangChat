// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, Animated, View, TextInput } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';
// import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
// import Nav from '../Nav/Nav';
// import { Scene, Router } from 'react-native-router-flux';

// import Tutorial from '../Tutorial/Tutorial';

// const TYPES = [ 'front', 'back', 'back', 'slide' ];
// const PARALLAX = [ false, false, true, false ];

// const Page = ({ openDrawer }) => (
// 	<View style={styles.page}>
// 		<RectButton style={styles.rectButton} onPress={openDrawer}>
// 			<Text style={styles.rectButtonText}>Open drawer</Text>
// 		</RectButton>
// 	</View>
// );

// export default class Example extends Component {
// 	state = { fromLeft: true, type: 0 };
// 	renderParallaxDrawer = progressValue => {
// 		const parallax = progressValue.interpolate({
// 			inputRange: [ 0, 1 ],
// 			outputRange: [ this.state.fromLeft ? -50 : 50, 0 ]
// 		});
// 		const animatedStyles = {
// 			transform: [ { translateX: parallax } ]
// 		};
// 		return (
// 			<Animated.View style={[ styles.drawerContainer, animatedStyles ]}>
// 				<Text style={styles.drawerText}>I am in the drawer!</Text>
// 				<Text style={styles.drawerText}>Watch parallax animation while you pull the drawer!</Text>
// 			</Animated.View>
// 		);
// 	};

// 	renderDrawer = () => {
// 		return (
// 			<View style={styles.drawerContainer}>
// 				<Nav />
// 			</View>
// 		);
// 	};

// 	render () {
// 		const drawerType = TYPES[this.state.type];
// 		const parallax = PARALLAX[this.state.type];
// 		return (
// 			<View style={styles.container}>
// 				<DrawerLayout
// 					ref={drawer => {
// 						this.drawer = drawer;
// 					}}
// 					drawerWidth={200}
// 					keyboardDismissMode="on-drag"
// 					drawerPosition={this.state.fromLeft ? DrawerLayout.positions.Left : DrawerLayout.positions.Right}
// 					drawerType={drawerType}
// 					drawerBackgroundColor="#ddd"
// 					overlayColor={drawerType === 'front' ? 'black' : '#00000000'}
// 					renderNavigationView={parallax ? this.renderParallaxDrawer : this.renderDrawer}
// 					contentContainerStyle={
// 						drawerType === 'front' ? (
// 							{}
// 						) : (
// 							Platform.select({
// 								ios: {
// 									shadowColor: '#000',
// 									shadowOpacity: 0.5,
// 									shadowOffset: { width: 0, height: 2 },
// 									shadowRadius: 60
// 								},
// 								android: {
// 									elevation: 100,
// 									backgroundColor: '#000'
// 								}
// 							})
// 						)
// 					}>
// 					<Page
// 						type={drawerType}
// 						fromLeft={this.state.fromLeft}
// 						parallaxOn={parallax}
// 						flipSide={() => this.setState({ fromLeft: !this.state.fromLeft })}
// 						nextType={() => this.setState({ type: (this.state.type + 1) % TYPES.length })}
// 						openDrawer={() => this.drawer.openDrawer()}
// 					/>
// 				</DrawerLayout>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1
// 	},
// 	page: {
// 		...StyleSheet.absoluteFillObject,
// 		alignItems: 'center',
// 		paddingTop: 40,
// 		backgroundColor: 'gray'
// 	},
// 	pageText: {
// 		fontSize: 21,
// 		color: 'white'
// 	},
// 	rectButton: {
// 		height: 60,
// 		padding: 10,
// 		alignSelf: 'stretch',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		marginTop: 20,
// 		backgroundColor: 'white'
// 	},
// 	rectButtonText: {
// 		backgroundColor: 'transparent'
// 	},
// 	drawerContainer: {
// 		flex: 1,
// 		paddingTop: 10
// 	},
// 	pageInput: {
// 		height: 60,
// 		padding: 10,
// 		alignSelf: 'stretch',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		marginTop: 20,
// 		backgroundColor: '#eee'
// 	},
// 	drawerText: {
// 		margin: 10,
// 		fontSize: 15,
// 		textAlign: 'left'
// 	}
// });
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
