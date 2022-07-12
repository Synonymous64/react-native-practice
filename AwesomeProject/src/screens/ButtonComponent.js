import React from 'react'
import {View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
const ButtonComponent = () => {
    const [text, settext] = useState("Press me")
    let i = 0;
    const showAlert = ()  =>{
        ++i;
        Alert.alert("This was Clicked");
        settext(`You pressed me ${i} times`)
    }
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.container1} onPress={showAlert}> 
        <Image 
            source={require("../../assets/splash.png")}
            style={{width:200, height : 200}}
            
        />
        <Text>This is Touchable Opacity and it doesn't have self-closing tag</Text>
        </TouchableOpacity>
            <Button
            onPress={showAlert}
            title={text}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            // disabled
            />
            <Text>Nice!</Text>
            <StatusBar style='auto'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        color:"red",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
    },
    container1:{
        color:"red",
    },
})

export default ButtonComponent;