import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Button title="No account? Create one here" onPress={() => navigation.navigate("Register")} />
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
    }
});

export default Login;