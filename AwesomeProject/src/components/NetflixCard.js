import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import { 
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic, 
} from '@expo-google-fonts/josefin-sans'
import {useFonts} from 'expo-font';
const NetflixCard = () => {
  let {fontsLoad} = useFonts                                                                                                    ({
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://cdn.wallpapersafari.com/11/54/LUk7fA.jpeg",
          }}
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>All Of Us Are Dead</Text>
          <Text style={styles.poster_text}>
            After a failed science experiment, a local high school is overrun
            with zombies, and the trapped students struggle to survive. With no
            food or water, and communication cut-off by the government, they
            must use equipment around the school to protect themselves in the
            midst of a battleground or they will become part of the infected.
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() => {
            Linking.openURL(
              "https://en.wikipedia.org/wiki/All_of_Us_Are_Dead#:~:text=From%20Wikipedia%2C%20the%20free%20encyclopedia%20All%20of%20Us,Yoo-mi%2C%20Kim%20Byung-chul%2C%20Lee%20Kyu-hyung%2C%20and%20Jeon%20Bae-soo."
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "JosefinSans_700Bold"
  },
  poster: {
    width: 250,
    borderWidth: 1,
    paddingBottom:10,
    alignItems: "center",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_600SemiBold",
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily : "JosefinSans_600SemiBold_Italic"
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
export default NetflixCard;
