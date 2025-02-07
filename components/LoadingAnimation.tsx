// File: components/LoadingAnimation.tsx

import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

interface LoadingAnimationProps {
  message?: string; // Optional loading message
  size?: "small" | "large"; // Size of the spinner
  color?: string; // Color of the spinner
}

export default function LoadingAnimation({
  message = "Loading...", // Default message
  size = "large", // Default size
  color = "#000", // Default color
}: LoadingAnimationProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  message: {
    marginTop: 10, // Space between spinner and message
    fontSize: 16,
    color: "#000", // Default text color
    textAlign: "center",
  },
});
