import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { register } from '../../services/auth.service';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = () => {
        register(email, password, confirmPassword)
            .then(() => {
                navigation.navigate("Login");
            })
            .catch(error => console.error(error));
    }

    return (
        <SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email..."
                    placeholderTextColor={"#8f8f8f"}
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password..."
                    placeholderTextColor={"#8f8f8f"}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    textContentType='password'
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Confirm password..."
                    placeholderTextColor={"#8f8f8f"}
                    style={styles.input}
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    textContentType='password'
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.button}>
                <Button title="Register" color={'green'} onPress={() => registerUser()} />
            </View>
            <View style={styles.button}>
                <Button title="Already have an account? Login" color={'gray'} onPress={() => navigation.navigate("Login")} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        color: 'black',
        flex: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#000',
        paddingBottom: 10,
    },
    icon: {
        flex: 1,
    },
    button: {
        margin: '3%',
        justifyContent: 'center',
    }
});

export default Register;