import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { login } from '../../services/auth.service';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        login(email, password)
            .then(response => {
                navigation.navigate("Homepage");
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
            <View style={styles.button}>
                <Button title="Login" color={'green'} onPress={() => loginUser()} />
            </View>
            <View style={styles.button}>
                <Button title="No account? Create one here" color={'gray'} onPress={() => navigation.navigate("Register")} />
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

export default Login;