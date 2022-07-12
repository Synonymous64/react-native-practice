import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
//! Alternate way to pass the props it is known as destructuring here we can pass the props directly to the parent class without mentioning the parent class
// const CardDetail = ({myText, imgSource}) => {
const CardDetail = (props) => {
    const statement = "This is about adding images in react";
    return (
        <View>
            <Text style={styles.attri}>
                {props.myText}
            </Text>
            <Image
                source = {props.imgSource}
                style={{ width: 200, height: 200 }}
            /> 
            <StatusBar />
        </View>
    );
};
const styles = StyleSheet.create({
    attri:{
        color: "red",
    }
})
export default CardDetail;