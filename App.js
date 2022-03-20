import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TouchableOpacity} from 'react-native';
import  Text from './components/Text';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import Spacer from "./components/Spacer";
import FieldInputs from "./components/FieldInputs";
import Button from "./components/Button";
import Login from "./components/Login";
import Register from "./components/Register";


export default function App() {
    let [fontsLoaded] = useFonts({
        'poppinsLight': require('./assets/fonts/Poppins-Light.ttf'),
        'poppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
        'poppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),

    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }







    return (
    <View style={styles.container}>
        {/*<Login />*/}
        <Register />

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
