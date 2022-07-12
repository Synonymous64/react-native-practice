import React from 'react';
import { FlatList, Text,StyleSheet, View } from 'react-native';
//! The key value should be always in string 
//! Either you can use key or u can make custom prop or key extracter of name like index
const FlatListdemo = () => {
    const names = [
    {
        index :"1",
        name : "Prajwal",
    },
    {
        index :"2",
        name : "Ayush"
    },
    {
        index :"3",
        name : "Sunita"
    },
    {
        index :"4",
        name : "Vilas"
    },
];
    return (
        <View >
        <FlatList  
        style={styles.listStyle}
        //! custom key name index in the form of props
            keyExtractor={(key) =>{
                return key.index;
            }}
            //! This is used to make horizontal scroll bar
            horizontal
            //! To get the element in the reverse order we use inverted props
            inverted
            //! To make a columns of any number you can specify
            // numColumns={2}
            //! It is used to hide the scrollbar
            showsHorizontalScrollIndicator={false}
        data={names} 
        renderItem={(element)=>{
            console.log(element.item.name);
            return <Text style={styles.textStyle}> {element.item.name} </Text>;
        }}
        />
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle :{
        fontSize: 20,
        fontStyle:"italic",
        padding:30,
        backgroundColor:"blue",
        margin:20,
        color:"white",
    },
    listStyle:{
        textAlign:"center",
        margin:20,
        padding:10,
    },
});
export default FlatListdemo

