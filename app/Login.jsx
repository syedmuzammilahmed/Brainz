import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from 'react';
import { CheckBox } from "@rneui/themed";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordHidden(prevState => !prevState);
    };

    const handleLogin = async () => {
        setError('');
        setMessage('');

        if (!name) {
            setError('Name is required');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            const response = await axios.post('http://192.168.1.35:3000/usersregister/login', {
                Name: name,  
                Password: password,
            });
            const token = response.data.token;
            console.log("Token received:", token);

            await AsyncStorage.setItem('token', token);
            console.log("Token saved to AsyncStorage");

            setMessage(response.data.message);
            navigation.push("Register")
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('An error occurred while logging in.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.ellipseImage}>
                <Image source={require('../assets/images/amazonlogin.png')} style={styles.ellipseImageStyle} />
            </View>
            <View style={styles.logoImageView}>
                <Text style={{fontSize:40,fontWeight:'bold', color:'#3FBFBF'}}>FITNESS</Text>
            </View>
            <View style={styles.signInTextView}>
                <Text style={styles.textStyle}>Sign In</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Name</Text>
                    <TextInput
                        placeholder="Enter Name"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Password</Text>
                    <TextInput
                        placeholder="Enter Password"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                    // secureTextEntry={isPasswordHidden}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10, top: 15 }}>
                        <MaterialIcons
                            name={isPasswordHidden ? "visibility-off" : "visibility"}
                            size={25}
                            color={"#FFFFFF"}
                        />
                    </TouchableOpacity>
                </View>
                {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
            {message ? <Text style={styles.errorMessage}>{message}</Text> : null}
                <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.push("AmazonForget")}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.rememberMeContainer}>
                    <CheckBox
                        title="Remember Me"
                        checked={isChecked}
                        onPress={() => setChecked(!isChecked)}
                        containerStyle={styles.checkboxContainer}
                        checkedColor="#3FBFBF"
                    />
                </View>
            </View>
            <View style={styles.signInContainer}>
                <TouchableOpacity style={styles.signInButton} 
                  onPress={() => {
                    // handleLogin(); // Call your login function
                    navigation.navigate("BottomTabs"); // Navigate to the Login screen
                  }}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push("Register")}>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    ellipseImage: {
        height: height * 0.2,
        width: width,
        marginLeft: -10
    },
    ellipseImageStyle: {
        height: '100%',
        width: '50%',
        resizeMode: 'contain',
    },
    logoImageView: {
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        height: '100%',
        width: '60%',
        resizeMode: 'contain',
    },
    signInTextView: {
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    inputContainer: {
        paddingHorizontal: '5%',
        marginTop: height * 0.02,
    },
    inputField: {
        marginBottom: height * 0.02,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textInput: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        elevation: 2,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 5,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#3FBFBF',
        fontWeight: 'bold',
    },
    checkboxContainer: {
        backgroundColor: "transparent",
        borderWidth: 0,
        marginLeft: -8
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rememberMeText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    signInContainer: {
        alignItems: 'center',
        marginTop: height * 0.10,
    },
    signInButton: {
        height: 50,
        width: '90%',
        backgroundColor: '#3FBFBF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    signUpText: {
        fontSize: 14,
        color: '#000',
    },
    signUpLink: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3FBFBF',
        marginLeft: 5,
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Login;
