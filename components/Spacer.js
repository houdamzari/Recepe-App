import React from 'react';
import {View,Text} from "react-native";
import styled from "styled-components";


const Wrappper = styled.Text`
    margin-bottom: ${props => props.margin};
`

function Spacer({margin}) {
    return (
        <Wrappper margin={margin} />
    );
}

export default Spacer;
