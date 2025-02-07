import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";



export default function HomeScreen() {
const router = useRouter();

const navigateToAddPearls = () => {
  router.push("addPearls");
};
const navigateToAddProcedure = () => {
  router.push("addProcedure");
};
const navigateToreviewImage = () => {
   router.push("reviewImage");
};

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
        <TouchableOpacity onPress={navigateToAddPearls}>
            <Text>Go to add pearl screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAddProcedure}>
        <Text>Go to add_1 screen</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={navigateToreviewImage}>
            <Text>Go to add_3 slide</Text>
        </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
