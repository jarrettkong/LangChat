import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../common/Button";

class SplashPage extends Component {
  render() {
    const { imageStyle, textStyle, textViewStyle, logInContainerStyle, logInTextStyle, logInButtonStyle } = styles;
    return (
      <View style={imageStyle}>
        <View style={textViewStyle}>
          <Text style={textStyle}>LangChat</Text>
        </View>
        <Image
          style={imageStyle}
          source={{ uri: "https://i.imgur.com/IoKqmrE.jpg" }}
        />
        <Button onPress={() => console.log("SIGN UP")}>Sign Up</Button>
        <View style={logInContainerStyle}>
          <Text style={logInTextStyle}>Already have an account?</Text>
          <Text style={logInButtonStyle}>Log In</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    fontWeight: "800",
    color: "#007aff"
  },
  imageStyle: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
    opacity: 0.8
  },
  textViewStyle: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    width: "100%"
  },
  logInContainerStyle: {
    position: "absolute",
    top: "93%",
    alignSelf: "center",
    fontWeight: "600",
    flexDirection: 'row',
  },
  logInTextStyle: {
    fontSize: 15,
    color: "#fff"
  },
  logInButtonStyle: {
    fontSize: 15,
    color: "#fff",
    marginLeft: 8,
    textDecorationLine: "underline"

  }
});

export default SplashPage;
