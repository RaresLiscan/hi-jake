import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { login } from '../../services/auth.service';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {

    }

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default Login;