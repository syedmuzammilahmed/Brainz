import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const GoalSelectionScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
const navigation = useNavigation();
  const goals = [
    { id: 1, emoji: '📉', text: 'Lose weight' },
    { id: 2, emoji: '🍀', text: 'Keep fit' },
    { id: 3, emoji: '💪', text: 'Get stronger' },
    { id: 4, emoji: '🏋️', text: 'Gain muscle mass' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Choose main goal</Text>

      {/* Goal Options */}
      <View style={styles.optionsContainer}>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal.id}
            style={[
              styles.option,
              selectedGoal === goal.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedGoal(goal.id)}
          >
            <Text style={styles.optionText}>
              {goal.emoji} {goal.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Start Training Button */}
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("GoalWeight")}>
        <Text style={styles.startButtonText}>Start Training</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#000',
    backgroundColor: '#f9f9f9',
  },
  optionText: {
    fontSize: 16,
  },
  startButton: {
    backgroundColor: '#3FBFBF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalSelectionScreen;
