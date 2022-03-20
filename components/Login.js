import React from 'react';
import Text from "./Text";
import Spacer from "./Spacer";
import FieldInputs from "./FieldInputs";
import Button from "./Button";
import {StyleSheet, TouchableOpacity, View} from "react-native";

function Login(props) {
    return (
        <View style={styles.container}>
            <Text primary bold> Welcome Back! </Text>
            <Spacer margin='1px'/>

            <Text secondary thin> Please enter your account here </Text>
            <Spacer margin='25px'/>
            <FieldInputs />
            <Spacer margin='25px'/>
            <Button title='Login'  red/>
            <Spacer margin='10px'/>
            <Text secondary>Or continue with</Text>
            <Spacer margin='10px'/>

            <Button  title='Google' />
            <Spacer margin='20px'/>
            <View style={{display:'flex', flexDirection:'row',}}>
                <Text primary >Dont have any account ?</Text>
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Text signup >Sign up</Text>
                </TouchableOpacity>
            </View>
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
