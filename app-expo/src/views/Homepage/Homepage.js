import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import * as AuthService from '../../services/auth.service';

const Homepage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Homepage</Text>
            <Text>JWT: {AuthService.getJwt()}</Text>
        </SafeAreaView>
    )
}

export default Homepage;