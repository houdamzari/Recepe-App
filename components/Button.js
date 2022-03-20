import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";

const GreenButton = styled.TouchableOpacity`
    background-color: ${props => props.red ? '#40E0D0' : '#DE3163'};
    width: 350px;
    height: 60px;
    border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
   


`
function Button({title,red}) {
    return (

        <GreenButton red={red}>
            <Text style={{color: '#FFF',
                fontSize:20, fontWeight:'bold'}}>{title}</Text>
        </GreenButton>
    )
}

export default Button;
