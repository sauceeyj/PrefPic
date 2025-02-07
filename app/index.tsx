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



};

const navigateTostart = () => {
  router.push("homePage");
}



};

const navigateToSecondLibrary = () => {

  router.push("second_library");          {/*Route to second_library*/}
};

const navigateToLibrary = () => {
  router.push("library");                 {/*Route to library*/}
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

        <TouchableOpacity onPress={navigateTostart}>
        <Text>Go to start</Text>

        <TouchableOpacity onPress={navigateToLibrary}>
        <Text>Go to library screen</Text>           {/*library button at index*/}
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSecondLibrary}>
        <Text>Go to second library screen</Text>    {/*Second library button at index*/}

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
