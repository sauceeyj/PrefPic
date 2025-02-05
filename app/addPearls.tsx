import { router, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function AddPearls() {

const router = useRouter();

const navigateToprocedureReviewSummary = () => {
  router.push("procedureReviewSummary");
};
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.backText}>←  Back</Text>
              </TouchableOpacity>
      <Text style={styles.header}>Procedure Pearls</Text>

      {/* Always Do */}
      <View style={styles.section}>
        <View style={styles.labelContainer}>
          <View style={[styles.dot, { backgroundColor: "green" }]} />
          <Text style={styles.label}>Always Do</Text>
        </View>
        <TextInput style={[styles.input, { height: 120 }]} multiline placeholder="Enter details..." />
      </View>

      {/* Watch For */}
      <View style={styles.section}>
        <View style={styles.labelContainer}>
          <View style={[styles.dot, { backgroundColor: "orange" }]} />
          <Text style={styles.label}>Watch For</Text>
        </View>
        <TextInput style={[styles.input, { height: 120 }]} multiline placeholder="Enter details..." />
      </View>

      {/* Never Do */}
      <View style={styles.section}>
        <View style={styles.labelContainer}>
          <View style={[styles.dot, { backgroundColor: "red" }]} />
          <Text style={styles.label}>Never Do</Text>
        </View>
        <TextInput style={[styles.input, { height: 120 }]} multiline placeholder="Enter details..." />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={navigateToprocedureReviewSummary}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    padding: 16,
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  section: {
    marginBottom: 16,
    marginTop: 25,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#375894",
    padding: 16,
    borderRadius: 31,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
