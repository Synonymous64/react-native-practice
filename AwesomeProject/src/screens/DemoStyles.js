import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DemoStyles = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText,styles.commonStyle]}>This is First Box</Text>
        <Text style={[styles.childText2,styles.commonStyle]}>This is Second Box</Text>
        <Text style={[styles.childText3,styles.commonStyle]}>This is Third Box</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    parentView :{
        width: "95%",
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth:3,
        borderColor : "#101820FF"
    },
    childText:{
        backgroundColor : "#97BC62",
        borderColor : "#2C5F20",
        color: "#2C5F20",
        marginTop : 30,
    },
    childText2 :{
        backgroundColor : "#04899D62",
        borderColor : "#04129762",
        color: "#056962",
    },
    childText3 : {
        backgroundColor : "#13567A62",
        borderColor : "#01AF7272",
        color: "#034E1272",
    },
    commonStyle : {
        fontSize : 20,
        paddingVertical : 30,
        textAlign : "center",
        borderWidth : 5,
        marginBottom : 30,
        marginHorizontal : 50,
    }
})
export default DemoStyles;
