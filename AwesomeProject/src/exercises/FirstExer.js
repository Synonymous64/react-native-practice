import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from "expo-status-bar";

const WelCome = () =>{
    return (
        <View>
        <Text style={styles.feature}>
            Welcome to Thapa Technical Channel
        </Text>
        <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    feature:{
        color:"blue",
        fontWeight:"bold",
        fontSize:40,
        
    }
});
export default WelCome;