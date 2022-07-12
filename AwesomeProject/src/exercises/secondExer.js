import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from "expo-status-bar";

const MyReact = () =>{
    const intro = "We love react-native and I am the subscriber of Thapa Technical Channel";
    return(
        <View>
        <Text style={styles.feature}>
            {intro}
        </Text>
        <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    feature:{
        fontSize:30,
    }
});
export default MyReact;