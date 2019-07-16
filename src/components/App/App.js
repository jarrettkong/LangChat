import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../reducers";
import SplashPage from "../SplashPage/SplashPage";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <SplashPage />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
