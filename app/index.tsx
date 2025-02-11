import { useRouter } from "expo-router";
import React from "react";
import CheckBox from "expo-checkbox" 
import { Image,ImageBackground  ,View,Text, StyleSheet, TouchableOpacity,Linking,Alert} from "react-native"
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function StartScreen(){

  const [isChecked, setChecked] = useState(false);
    const router  = useRouter();
     // Function to fetch authorization code from API
  const fetchAuthorizationCode = async () => {
    try {
      const response = await fetch("https://your-api.com/authorize-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        const authCode = data.authorizationCode; // Assuming API returns { authorizationCode: "123456" }

        // Store authorization code in AsyncStorage
        await AsyncStorage.setItem("AUTH_CODE", authCode);
        console.log("Authorization Code Stored:", authCode);

        // Navigate to the next screen
        router.push("library");
      } else {
        Alert.alert("Error", data.message || "Failed to get authorization code");
      }
    } catch (error) {
      console.error("API Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };
  
    useEffect(() => {
      console.log("isChecked updated:", isChecked);
    }, [isChecked]);
  
    const navigateToIndex = () => {
      console.log("isChecked before navigation:", isChecked); // Debugging log
      if (!isChecked) {
        Alert.alert("Terms & Privacy", "You must accept the Terms and Privacy Policy to proceed.");
        return;
      }
      router.push("library");
    };




return (

   <ImageBackground
        source={require("../assets/Start.jpg")} // Replace with your image path
         style={styles.background}
     >
     
     <View style={[styles.container]}>
    <Image source={require("../assets/gray.jpg")}style={styles.imagestyle}/>
     <Text style={styles.pref}>PrefPic Demo</Text>
        <Text style= {styles.description}>There is no sign-in required for </Text>
       <Text > this demo version. The live </Text>
        <Text>version is password protected. </Text>
       
       {/* Checkbox*/}
       <View style={styles.checkboxContainer}>
          <CheckBox 
            value={isChecked} 
            onValueChange={(newValue) => {
              console.log("Checkbox clicked:", newValue); // Debugging log
              setChecked(newValue);
            }} 
          />
       <Text 
        style={styles.link} 
        onPress={() => Linking.openURL("https://prefpic.com/terms.html")}
      >
        Accept Terms
      </Text>
      <Text> and </Text>
      <Text 
        style={styles.link} 
        onPress={() => Linking.openURL("https://prefpic.com/privacypolicy.html")}
      >
        Privacy Policy
      </Text>
       </View>

        {/* Button*/}
        <View style={styles.bcontainer}>
        <TouchableOpacity 
            style={[styles.getButton, { opacity: isChecked ? 1 : 0.5 }]} 
            onPress={navigateToIndex}
            disabled={!isChecked} // Prevents clicking when unchecked
          >
            <Text style={styles.GetText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      
      </View>
     </ImageBackground>


)

}

const styles = StyleSheet.create({
  GetText:{
    color: 'white',
    fontSize: 15,
    alignItems: 'center'
  },
  getButton:{
    backgroundColor: "#375894",
    alignItems: 'center',
    borderRadius: 31,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
    width: 250
  
    
  },
  pref:{
    fontSize: 30,
    paddingTop: 30,
    lineHeight: 33,
    fontWeight: 600,
    paddingLeft: 45,
    paddingRight: 45,
   
    
   

    
  },

  container: {
    flex: .7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7EFFF",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 28, // 10px from left
    marginRight: 28, // 10px from right
    height: 452,
    width: 320,
    color: "#FFFFFF"
    

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
    fontSize: 15,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingTop: 60
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    justifyContent: 'space-between',                                                      
    fontWeight: 400,
    
    paddingTop: 20,
    paddingLeft: 44,
    paddingRight: 44,
  
   
  },
  accept: {
    fontSize: 11,
    gap: 4,
    fontWeight: 400
  },
  bcontainer:{
    
    
    
    width: 250,
    paddingTop: 50,
  
    
    paddingBottom: 1,
  },
  imagestyle:{
    width: 75,  
    height: 75,
    borderRadius: 50,
    paddingTop: 61
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  }
   

});

