import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SelectHeight = () => {
  const [unit, setUnit] = useState('Centimetre');
  const [height, setHeight] = useState('175');
const navigation = useNavigation();
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

      <Text style={styles.title}>Select height</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, unit === 'Feet' && styles.selectedButton]}
          onPress={() => setUnit('Feet')}
        >
          <Text style={[styles.toggleText, unit === 'Feet' && styles.selectedText]}>Feet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, unit === 'Centimetre' && styles.selectedButton]}
          onPress={() => setUnit('Centimetre')}
        >
          <Text style={[styles.toggleText, unit === 'Centimetre' && styles.selectedText]}>
            Centimetre
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <Text style={styles.unitText}>{unit === 'Feet' ? 'ft' : 'cm'}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Goal")}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#999',
  },
  selectedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: 100,
  },
  unitText: {
    fontSize: 24,
    marginLeft: 10,
    color: '#999',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  continueButton: {
    backgroundColor: '#3FBFBF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectHeight;
