import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectWeight = () => {
  const [unit, setUnit] = useState("Kilogram");
  const [weight, setWeight] = useState("");
const navigation = useNavigation();
  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>Step 5 of 8</Text>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Select weight</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, unit === "Pound" && styles.activeButton]}
          onPress={() => handleUnitChange("Pound")}
        >
          <Text style={[styles.toggleText, unit === "Pound" && styles.activeText]}>Pound</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, unit === "Kilogram" && styles.activeButton]}
          onPress={() => handleUnitChange("Kilogram")}
        >
          <Text style={[styles.toggleText, unit === "Kilogram" && styles.activeText]}>Kilogram</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="0.0"
        />
        <Text style={styles.unitText}>{unit === "Kilogram" ? "kg" : "lb"}</Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("TrainingLevelSelection")}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  stepText: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    marginVertical: 10,
  },
  skipButton: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#999",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "#000",
  },
  toggleText: {
    fontSize: 16,
    color: "#000",
  },
  activeText: {
    color: "#FFF",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    fontSize: 32,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    width: 100,
  },
  unitText: {
    fontSize: 20,
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  continueText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
});

export default SelectWeight;
