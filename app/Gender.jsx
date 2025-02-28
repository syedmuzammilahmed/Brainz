import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ChooseGenderScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

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
      <Text style={styles.title}>Choose gender</Text>

      {/* Gender Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'woman' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('woman')}
        >
          <Text style={styles.emoji}>👩‍🦰</Text>
          <Text style={styles.optionText}>Woman</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'man' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('man')}
        >
          <Text style={styles.emoji}>👨‍🦰</Text>
          <Text style={styles.optionText}>Man</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'genderNeutral' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('genderNeutral')}
        >
          <Text style={styles.emoji}>🧑‍🦰</Text>
          <Text style={styles.optionText}>Gender neutral</Text>
        </TouchableOpacity>
      </View>

      {/* Button Wrapper (pushes button to bottom) */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Height")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  optionsContainer: {
    flex: 1, // Pushes button to bottom
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  selectedOption: {
    borderColor: 'black',
  },
  emoji: {
    fontSize: 24,
    marginRight: 16,
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
  buttonWrapper: {
    justifyContent: 'flex-end', // Pushes button to bottom
    paddingBottom: 20, // Add padding to avoid bottom edge issues
  },
  continueButton: {
    backgroundColor: '#3FBFBF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
