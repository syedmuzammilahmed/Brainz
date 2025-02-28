import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';

const Register = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordHidden(prevState => !prevState);
    };

    const Register = async () => {
        if (!name) {
            setErrorMessage('Name is required');
            return;
        }
        if (!validatePhone(phone)) {
            setErrorMessage('Phone number is required');
            return;
        }
        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        } else {
            setErrorMessage('');
        }

        try {
            const response = await axios.post('http://192.168.1.35:3001/usersregister/userRegister', {
                name: name,
                phone: phone,
                password: password,
            });

            if (response.status === 201) {
                setMessage('Registration successful');
                console.log('Registration successful:', response.data);
            } else {
                console.warn('Registration failed:', response.data.message);
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('Registration failed. Please try again.');
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
                <Text style={styles.textStyle}>Welcome Onboard!</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Name</Text>
                    <TextInput
                        placeholder="Enter Name"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Phone number</Text>
                    <TextInput
                        placeholder="Enter Phone number"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Password</Text>
                    <TextInput
                        placeholder="Enter Password"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        secureTextEntry={isPasswordHidden}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10, top: 15 }}>
                        <MaterialIcons
                            name={isPasswordHidden ? "visibility-off" : "visibility"}
                            size={25}
                            color={"#FFFFFF"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Enter Confirm Password</Text>
                    <TextInput
                        placeholder="Enter Confirm Password"
                        placeholderTextColor="#AEAEAE"
                        style={styles.textInput}
                        secureTextEntry={isPasswordHidden}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10, top: 15 }}>
                        <MaterialIcons
                            name={isPasswordHidden ? "visibility-off" : "visibility"}
                            size={25}
                            color={"#FFFFFF"}
                        />
                    </TouchableOpacity>
                </View>

                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                {message ? <Text style={styles.successMessage}>{message}</Text> : null}
            </View>
            <View style={styles.signInContainer}>
                <TouchableOpacity style={styles.signInButton} onPress={() => {
                    // Register(); // Call your login function
                    navigation.navigate("Gender"); // Navigate to the Login screen
                  }}>
                    <Text style={styles.signInButtonText}>Sign Up</Text>
                </TouchableOpacity>
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
    signInContainer: {
        alignItems: 'center',
        marginTop: height * 0.02,
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
    errorMessage: {
        color: 'red',
        fontSize: 14,
        marginTop: 0,
    },
    successMessage: {
        color: 'green',
        fontSize: 14,
        marginTop: 0,
    },
});

export default Register;
