import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const FitnessTracker = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    
      {/* Steps Progress */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Away from Sofa</Text>
        <Text style={styles.stepGoal}>3000 steps left</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepCount}>0</Text>
          <Icon name="edit" type="feather" color="#000" size={16} />
        </View>
        <Text style={styles.stepGoal}>/6000 Steps</Text>
        <Text style={styles.dailyAverage}>Daily average: 0</Text>
        <View style={styles.reportContainer}>
          <Text style={styles.reportText}>Report</Text>
          <TouchableOpacity>
            <Text style={styles.detailText}>Detail &gt;</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Exercise */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Exercise</Text>
        <View style={styles.exerciseStats}>
          <Text style={styles.statText}>0h 0m</Text>
          <Text style={styles.statText}>0.0 Kcal</Text>
          <Text style={styles.statText}>0.00 Mile</Text>
        </View>
      </View>

      {/* Heart Rate */}
      <View style={styles.healthCard}>
        <View style={styles.healthHeader}>
          <Text style={[styles.healthTitle, { color: "#FF3B30" }]}>❤️ Heart rate</Text>
          <Icon name="chevron-right" type="feather" color="#000" size={18} />
        </View>
        <Text style={styles.normalText}>🟢 Normal</Text>
        <Text style={styles.healthValue}>83 <Text style={styles.unit}>BPM</Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HeartbeatMeasure")}>
          <Text style={styles.buttonText}>Measure</Text>
        </TouchableOpacity>
      </View>

      {/* Blood Pressure */}
      <View style={styles.healthCard}>
        <View style={styles.healthHeader}>
          <Text style={[styles.healthTitle, { color: "#00C9FF" }]}>💙 Blood pressure</Text>
          <Icon name="chevron-right" type="feather" color="#000" size={18} />
        </View>
        <Text style={styles.normalText}>🟢 Normal</Text>
        <Text style={styles.healthValue}>97/75 <Text style={styles.unit}>mmHg</Text></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
      </View>

      {/* Weight */}
      <View style={styles.healthCard}>
        <View style={styles.healthHeader}>
          <Text style={[styles.healthTitle, { color: "#0FCC66" }]}>🏋️ Weight</Text>
          <Icon name="chevron-right" type="feather" color="#000" size={18} />
        </View>
        <Text style={styles.motivationText}>💪 Success begins when you take the first step.</Text>
        <Text style={styles.healthValue}>158 <Text style={styles.unit}>lbs</Text></Text>
        <Text style={styles.goalText}>🎯 1 lbs left</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* Water Intake */}
      <View style={styles.waterCard}>
        <View style={styles.healthHeader}>
          <Text style={[styles.healthTitle, { color: "#1E90FF" }]}>🥤 Track water intake</Text>
          <Icon name="x" type="feather" color="#000" size={18} />
        </View>
        <Text style={styles.waterReminder}>Remind you to drink water and help you stay hydrated.</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
    padding: 16,
  },
  card: {
    backgroundColor: "#F0F0F0", // Light gray for contrast
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#000", // Black text
    fontWeight: "bold",
  },
  stepGoal: {
    fontSize: 14,
    color: "#333", // Dark gray text
  },
  stepHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepCount: {
    fontSize: 42,
    color: "#000", // Black text
    fontWeight: "bold",
  },
  dailyAverage: {
    fontSize: 12,
    color: "#666", // Lighter gray
    marginBottom: 8,
  },
  reportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  reportText: {
    fontSize: 14,
    color: "#000",
  },
  detailText: {
    fontSize: 14,
    color: "#FF6D00",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6D00",
  },
  exerciseStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  statText: {
    fontSize: 16,
    color: "#000",
  },
  healthCard: {
    backgroundColor: "#F0F0F0",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  healthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  healthTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  normalText: {
    color: "#0F0",
    fontSize: 14,
  },
  healthValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  unit: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#DDD", // Lighter button
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  motivationText: {
    color: "#666",
    fontSize: 12,
    marginBottom: 5,
  },
  goalText: {
    color: "#FF6D00",
    fontSize: 12,
    marginTop: 5,
  },
  waterCard: {
    backgroundColor: "#F0F0F0",
    padding: 16,
    borderRadius: 12,
  },
  waterReminder: {
    color: "#666",
    fontSize: 12,
  },
});

export default FitnessTracker;
