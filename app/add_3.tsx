import { Router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    padding: 16,
  },

  backText: {
    fontSize: 16,
    color: "#007AFF",
  },

  header: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 16,
    paddingTop: 30,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 20,
    flexDirection: "row",
    width: "100%",
  },

  nextbutton: {
    backgroundColor: "#375894",
    padding: 16,
    borderRadius: 31,
    alignItems: "center",
    marginLeft: 10,
    width: 120,
    flex: 1,
  },

  retakebutton: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 31,
    alignItems: "center",
    borderColor: "#375894",
    width: 180,
    borderWidth: 2,
  },

  retakebuttonText: {
    color: "#375894",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 500,
    marginTop: 5,
    borderRadius: 20,
    padding: 12,
  },

  fullImageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  fullImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  closeButton: {
    position: "absolute",
    top: 140,
    right: 20,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 30, 
    padding: 8, 
    zIndex: 1001,
    justifyContent: "center",
    alignItems: "center", 
  },
  
  closeButtonText: {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#000", 
  },
  
});

export default function add_3() {
  const router = useRouter();
  const [isPreview, setIsPreview] = useState(false); 


  //open bleed view
  const handleImageClick = () => {
    setIsPreview(true); 
  };

  //close bleed view
  const handleClosePreview = () => {
    setIsPreview(false); 
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>←  Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Image for: [Procedure Name]</Text>

      {/* Image */}
      <TouchableOpacity onPress={handleImageClick}>
        <Image style={styles.image} source={require("../assets/scalpel.png")} />
      </TouchableOpacity>


      {/* Full Image Overlay */}
      {isPreview && (
        <View style={styles.fullImageOverlay}>
          <TouchableOpacity onPress={handleClosePreview} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Image style={styles.fullImage} source={require("../assets/scalpel.png")} />
        </View>
      )}


      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retakebutton} onPress={() => router.back()}>
          <Text style={styles.retakebuttonText}>Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextbutton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
