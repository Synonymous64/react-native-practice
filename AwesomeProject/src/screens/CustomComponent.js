import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";

//! Always Use CamelCase while creating components Always remember
const customComponents = () => {
    return (
        <View>
            <Text style={styles.attri}>This is a Custom component through import</Text>
            <Image
                source={{
                    uri: `https://reactnative.dev/docs/assets/p_cat2.png`,
                }}
                style={{ width: 200, height: 200 }}

            />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    attri: {
        color: "red"
    }
});
export default customComponents;