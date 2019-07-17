import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from "./components/SplashPage/SplashPage";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Home from './components/Home/Home';

const RouterComponent = () => {
	return (
    <Router>
      <Scene key="root">
        <Scene key="splashPage" component={SplashPage} initial hideNavBar={true}/>
        <Scene key="loginForm" component={LoginForm} hideNavBar={true}/>
        <Scene key="signUpForm" component={SignUpForm} hideNavBar={true}/>
        <Scene key="home" component={Home} hideNavBar={true}/>
      </Scene>
    </Router>
	);
};

export default RouterComponent;
