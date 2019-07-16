import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 19,
    fontWeight: "600",
    paddingTop: 12,
    paddingBottom: 12
  },
  buttonStyle: {
    position: "absolute",
    alignSelf: "stretch",
    width: "80%",
    backgroundColor: "#007aff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    top: "84%"
  }
};

export default Button;
