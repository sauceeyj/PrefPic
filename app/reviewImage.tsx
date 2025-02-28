import { useLocalSearchParams, useRouter } from "expo-router";
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
    padding: 14,
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
    width: 350,
    height: 490,
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
    backgroundColor: "rgba(41, 41, 41, 0.8)",
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

export default function reviewImage() {
  const router = useRouter();

  //RJP -> 2/7/2025
  // (import) image and procedure name from add_2.tsx 
  const { photoUri, procedureName } = useLocalSearchParams<{
    photoUri: string;
    procedureName: string;
  }>();

  //RJP -> 2/7/2025
  // Decode the photo URI
  const decodedPhotoUri = photoUri ? decodeURIComponent(photoUri) : null;

  //RJP
  // Debug log to check if URI is correct 
  console.log("Received photoUri: ", decodedPhotoUri);  // Check if the URI is correct

  const [isPreview, setIsPreview] = useState(false);  

  const navigateToCamera = () => {

    //RJP -> 2/7/2025
    // Use replace instead of push to go back to camera without stacking screens
    router.replace("camera"); 
  };

  const navigateToReviewSummary = () => {
    router.push("viewEditPicture");
  }
  

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
      <TouchableOpacity onPress={navigateToCamera}>
        <Text style={styles.backText}>←  Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.header}>Image for: {procedureName}</Text> 

      {/* RJP -> 2/8/2025
        change image source to retrieve image taken from camera
      */}
      {decodedPhotoUri  ? (
      <TouchableOpacity onPress={handleImageClick}>
        <Image style={styles.image} source={{ uri: decodedPhotoUri }} /> 
      </TouchableOpacity>
      ) : (
  <Text>No image available</Text>  // Show this if the URI is invalid or missing
)}


      {/* Full Image Overlay */}
      {isPreview && (
        <View style={styles.fullImageOverlay}>
          <TouchableOpacity onPress={handleClosePreview} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Image style={styles.fullImage} source={{ uri: photoUri }} />
        </View>
      )}


      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retakebutton} onPress={navigateToCamera}>
          <Text style={styles.retakebuttonText}>Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextbutton} onPress={navigateToReviewSummary}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
