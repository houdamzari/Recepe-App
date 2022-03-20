import React, {useState} from 'react';

import {View, TextInput, Button} from "react-native";
import styled from "styled-components";
import Text from "./Text";
import Spacer from "./Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";

const Field = styled.TextInput`
  height: 70px;
  width: 350px;
  margin: 12px;
  border-width: 1px;
  padding: 10px 10px 10px 60px;
  border-radius: 35px;
  border-color: #b1b6cb;
  font-size: 16px;
  font-weight: 700;

`
const ForgotPassword = styled.TouchableOpacity`
  font-size: 32px;
  
  width: 60%;
`
const ForgotText = styled.Text`
  font-size: 17px;
  position: relative;
  left: 220px;
  font-weight: 600;

`


function FieldInputs(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(null)
    return (
        <View>
        <View style={{display:'flex', flexDirection: 'row'}}>
            <AntDesign name="mail"
                       size={24}
                       color="#000"
                       style={{position:'absolute', top:35, left: 30}}

            />
            <Field value={email}
                   onChangeText={setEmail}
                   placeholder="Email or phone number"
                   placeholderTextColor="#b1b6cb"/>
        </View>

            <View style={{display:'flex', flexDirection: 'row'}}>
                <AntDesign name="lock"
                           size={30}
                           color="#000"
                           style={{position:'absolute', top:35, left: 30}} />

                <Field  value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#b1b6cb"
            /></View>
            <Spacer margin='1px' />
            <View>
                <ForgotPassword
                    title="Forgot password?"
                    color='#000'>
                    <ForgotText>Forgot password?</ForgotText>
                </ForgotPassword></View>
        </View>

    )
}

export default FieldInputs;
