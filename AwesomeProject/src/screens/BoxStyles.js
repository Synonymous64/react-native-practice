import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxStyles = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText, styles.commonStyle]}>Box Model 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Box Model 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Box Model 3</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    parentView :{
        width: "95%",
        marginTop: 50,
        marginHorizontal: 10,
        borderWidth:3,
        borderColor : "#101820FF"
    },
    childText:{
        backgroundColor : "#97BC62",
        borderColor : "#2C5F20",
        color: "#2C5F20",
        marginTop:30,
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
        // for padding from top and bottom we use padding vertical
        paddingVertical : 30,
        // padding horizontal we use to get the equal padding from left and right
        textAlign : "center",
        borderWidth : 5,
        // To give color
        // borderColor: "red",
        marginBottom : 30,
        // to make the object into center we use the margin horizontal means from left and right
        marginHorizontal : 50,
    }
})
export default BoxStyles;
