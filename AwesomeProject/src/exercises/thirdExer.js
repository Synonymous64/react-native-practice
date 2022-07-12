import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from "expo-status-bar";

const IntroDuction = () =>{
    const myName = "Prajwal Vilas Urkude";
    return(
        <View>
        <Text style={styles.feat}>
            Hi there, my name is {myName}
        </Text>
        <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    feat:{
        color:"red",
        fontStyle:"italic",
    }
});

export default IntroDuction;