import React from "react";
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  return (
    <ImageBackground
    source={require("../assets/splash-icon.png")} // Replace with your image path
    style={styles.background}
  >
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
   background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
});
