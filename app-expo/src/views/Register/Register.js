import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { register } from '../../services/auth.service';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = () => {

    }

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default Register;