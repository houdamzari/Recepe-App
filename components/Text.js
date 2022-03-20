import React from 'react';
import {Text, View} from 'react-native';
import styled from "styled-components";



const PrimaryText = styled.Text`
  color: ${props => props.primary ? "#343434" : props.signup ? "#40E0D0" : "#b1b6cb"};
  font-size: ${ props=> props.bold ? "30px" : "17px" };
  font-family: ${ props=> props.bold ? "poppinsBold" : "poppinsRegular" };
  font-weight: 700;
`

const MyComponent = ({children,primary,secondary,bold,thin,signup}) => {

    return (
        <PrimaryText signup={signup} primary={primary} secondary={secondary}
        bold={bold} thin={thin}>
            {children}
        </PrimaryText>
    );
};

export default MyComponent;

