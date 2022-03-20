import React from 'react';
import Text from "./Text";
import Spacer from "./Spacer";
import FieldInputs from "./FieldInputs";
import Button from "./Button";
import {StyleSheet, TouchableOpacity, View} from "react-native";

function Login(props) {
    return (
        <View style={styles.container}>
            <Text primary bold> Welcome ! </Text>
            <Spacer margin='1px'/>

            <Text secondary thin> Please enter your account here </Text>
            <Spacer margin='25px'/>
            <FieldInputs />
            <Spacer margin='25px'/>
            <Button title='Sign up'  red/>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },});

export default Login;
