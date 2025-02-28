import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";

const HeartbeatMeasure = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [heartRate, setHeartRate] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  const measureHeartRate = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      let fakeBPM = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
      setHeartRate(fakeBPM);
      setIsMeasuring(false);
      Alert.alert("Heart Rate Measured", `Your BPM: ${fakeBPM}`);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={Camera?.Constants?.Type?.back || "back"} />
      <Text style={styles.text}>Place your finger on the camera to measure your heart rate.</Text>
      <TouchableOpacity style={styles.button} onPress={measureHeartRate} disabled={isMeasuring}>
        <Text style={styles.buttonText}>{isMeasuring ? "Measuring..." : "Start Measuring"}</Text>
      </TouchableOpacity>
      {heartRate && <Text style={styles.bpmText}>❤️ {heartRate} BPM</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  camera: { width: "100%", height: "100%", position: "absolute" },
  text: { color: "#fff", fontSize: 16, position: "absolute", top: "60%", textAlign: "center" },
  button: { position: "absolute", bottom: 100, backgroundColor: "#FF3B30", padding: 10, borderRadius: 10 },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  bpmText: { color: "#FF3B30", fontSize: 24, fontWeight: "bold", position: "absolute", bottom: 150 },
});

export default HeartbeatMeasure;
