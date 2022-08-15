import React from "react";
import { Text, View, StyleSheet } from "react-native";
const FlexBox = () => {
  return (
    <View>
      <View style={Styles.parentViewer}>
        <Text style={[Styles.childText, Styles.commonAttributes]}>Box1</Text>
        {/* To make Box2 in centre */}
        <View style={Styles.subParent}>
          <Text style={[Styles.childText2, Styles.commonAttributes]}>Box2</Text>
        </View>
        <Text style={[Styles.childText3, Styles.commonAttributes]}>Box3</Text>
        <Text style={[Styles.childText4, Styles.commonAttributes]}>Box4</Text>
        <Text style={[Styles.childText5, Styles.commonAttributes]}>Box5</Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  parentViewer: {
    //! Flex Box only works on parent CSS never in child CSS
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "#101820FF",
    backgroundColor: "aliceblue",
    // flexDirection: "row"
    // flexDirection: "column", //! it is the default attribute while declaring CSS
    // flexDirection: "column-reverse",
    // flexDirection: "row-reverse",
    // justifyContent: "center", //! will be in center vertically
    // alignItems: "center", //! Will be in center horizontically
    //! Other attributes of align items
    // alignItems: "flex-start",
    // justifyContent: "space-between", //! To get proper space between each item
    // justifyContent: "space-around", //! will give equal space from the border
    // alignItems: "flex-start", //! everything will be on left side
    // alignItems: "flex-end", //! everything will be on right side
    // justifyContent: "space-evenly", //! From every side it is getting equal space
    // alignItems: "flex-start", //! it takes the required size of the shape as per the size vertically
    // flexDirection: "row",
    // justifyContent: "space-evenly", //! will give the required size horizontically if the flex direction is row
    position: "relative",
  },
  childText: {
    backgroundColor: "#97BC62FF",
    borderColor: "#2C5F2D",
    color: "#2C5F2D",
    // flex: 1, //! It will take all the available space
    right: 0,
  },
  childText2: {
    backgroundColor: "#9752FF",
    borderColor: "#F2D",
    color: "#2CD",
    //! Do not centre using this manner
    // top: "45%",
    // left: "30%",
    alignSelf: "center",
  },
  //* To use the flex on child we have to use align self
  childText3: {
    backgroundColor: "#12B",
    borderColor: "#5FD",
    color: "#25F",
    // alignSelf: "flex-end", //* Like this
    bottom: 0,
    right: 0,
  },
  childText4: {
    backgroundColor: "#121F",
    borderColor: "#2C5F2D",
    color: "#F71D",
    bottom: 0,
  },
  childText5: {
    backgroundColor: "#976F",
    borderColor: "#A5F",
    color: "#B34",
  },
  commonAttributes: {
    height: "10%",
    margin: 4,
    width: "40%",
    borderColor: "black",
    borderWidth: 3,
    textAlign: "center",
    paddingTop: 10,
    position: "absolute",
  },
  subParent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FlexBox;
