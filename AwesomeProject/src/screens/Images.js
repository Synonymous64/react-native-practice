import React from "react";
import { ScrollView, View } from "react-native";
import CardDetail from "../components/CardDetail";
const Images = () => {
    return (
        <View>
        <ScrollView>
            <CardDetail 
            // Props including
            myText="This is my first Image"
            imgSource = {require("../../assets/adaptive-icon.png")}
            />
            <CardDetail
                myText="This is my second Image"
                imgSource = {require("../../assets/icon.png")}
            />
            <CardDetail
                myText="This is my third Image"
                imgSource = {require("../../assets/favicon.png")}
            />
            <CardDetail
                myText="This is my fourth Image"
                imgSource = {require("../../assets/splash.png")}
            />
            <CardDetail
                myText="This is my fourth Image"
                imgSource = {require("../../assets/splash.png")}
            />
            </ScrollView>
        </View>
    );
};

export default Images;