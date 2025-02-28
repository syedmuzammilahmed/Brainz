import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/images/fitness.png')} // Ensure the path is correct
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to FitzApp</Text>
        <Text style={styles.subtitle}>
          The first fitness App. Improve your fitness, practice mindfulness, or
          prepare for new adventures with a series of specially designed
          workouts and meditations.
        </Text>

        

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Sign in</Text>
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  overlay: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  paginationDot: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5
  },
  paginationDotInactive: {
    backgroundColor: '#aaa'
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})

export default WelcomeScreen
