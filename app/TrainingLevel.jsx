import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrainingLevelSelection = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
const navigation = useNavigation();
  const levels = [
    { id: 1, title: "Beginner", description: "I want to start training" },
    { id: 2, title: "Irregular training", description: "I train 1-2 times a week" },
    { id: 3, title: "Medium", description: "I train 3-5 times a week" },
    { id: 4, title: "Advanced", description: "I train more than 5 times a week" },
  ];

  return (
    <View style={styles.container}>
         <View style={styles.header}>
                <TouchableOpacity>
                  <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
               
                <TouchableOpacity>
                  <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
              </View>
      <Text style={styles.heading}>Choose training level</Text>
      
      {levels.map((level) => (
        <TouchableOpacity
          key={level.id}
          style={[
            styles.option,
            selectedLevel === level.id && styles.selectedOption,
          ]}
          onPress={() => setSelectedLevel(level.id)}
        >
          <Text style={styles.optionTitle}>{level.title}</Text>
          <Text style={styles.optionDescription}>{level.description}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Activity")}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  stepText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 20,
    color: '#000',
  },
  step: {
    fontSize: 16,
    color: '#999',
  },
  skip: {
    fontSize: 16,
    color: '#000',
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  selectedOption: {
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TrainingLevelSelection;
