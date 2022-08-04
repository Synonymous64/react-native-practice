// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello Prajwal!</Text>
// <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
// flex: 1,
// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
//   },
// });

// import React from "react";
// import {Text, StyleSheet} from 'react-native';

// const App = () => {
//   return(
//     <Text style = {styles.textStyle}>Hello World</Text>
//   )
// }
// const styles = StyleSheet.create({
//   textStyle :{
//     color : "red",
//     alignItems : "center",
//   },
// });
// export default App;

//* import Libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import FlatListdemo from "./src/screens/FlatListdemo";
// import CustomComponents from "./src/screens/CustomComponent";
// import WelCome from "./src/exercises/FirstExer";
// import MyReact from "./src/exercises/secondExer";
// import IntroDuction from "./src/exercises/thirdExer";
import Images from "./src/screens/Images";
import ButtonComponent from "./src/screens/ButtonComponent";
import NetflixCard from "./src/components/NetflixCard";
import DemoStyles from "./src/screens/DemoStyles";
import BoxStyles from "./src/screens/BoxStyles";
import Scrolling from "./src/screens/Scrolling";
import FlexBox from "./src/screens/FlexBox";
//* Create a component that return jsx / simple function
const App = () => {
  const myIntro = "Hello this is Prajwal";
  const myElement = <Text>Hello World</Text>;
  const getFullName = (firstName, secondName, thirdName) => {
    return `My Name is ${firstName} ${secondName} ${thirdName}`;
  };
  return (
    // <View style={styles.container}>
    <View>
      {/* <CustomComponents /> */}
      {/* <Text style={styles.fea}>This is myApp.js!</Text>
      {myElement} */}
      {/* <Text style={styles.fea}>{myIntro}</Text> */}
      {/* <WelCome/> */}
      {/* <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      /> */}
      {/* <MyReact/> */}
      {/* <IntroDuction/> */}
      {/* <Text>Hii! {getFullName("Prajwal","Vilas","Urkude")}</Text> */}
      {/* <FlatListdemo/> */}
      {/* <Images /> */}
      {/* <ButtonComponent/> */}
      {/* <Images/> */}
      {/* <BoxStyles/> */}
      {/* <FlatListdemo/> */}
      {/* <Scrolling/> */}
      <FlexBox/>
      <StatusBar style="auto" />
    </View>
  );
};
//* Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fea: {
    color: "red",
  },
});
//* Export the file , so that we can use it elsewhere in our app
export default App;
