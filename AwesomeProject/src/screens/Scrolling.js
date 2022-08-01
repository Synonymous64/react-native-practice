import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const Scrolling = () => {
  const netflixData = [
    {
      name: "Archive 81",
      year: "2022",
      creator: "Rebecca",
      genre: "Horror, Thriller",
    },
    {
      name: "Cheef",
      year: "2021-20220",
      creator: "Greg Whitely",
      genre: "Docuseries",
    },
    {
      name: "Cobra Kai",
      year: "2018-2022",
      creator: "Hayden",
      genre: "Drama",
    },
    {
      name: "The Witcher",
      year: "2020-2022",
      creator: "Lauren Schmidt",
      genre: "Reality",
    },
    {
      name: "Emily in Paris",
      year: "2020",
      creator: "Darren Star",
      genre: "Romance , Drama",
    },
    {
      name: "Death Note",
      year: "2021",
      creator: "Unknown",
      genre: "Horror, Thriller",
    },
  ];
  return (
    <>
      <View>
        <FlatList
          style={styles.listStyle}
          keyExtractor={(key) => {
            return key.name;
          }}
          //   horizontal
          data={netflixData} // compulsory two things
          renderItem={({ item }) => {
            return (
              <View style={styles.viewStyles}>
                <Text style={styles.textStyle}>Name :{item.name}</Text>
                <Text style={styles.textStyle}>Year: {item.year}</Text>
                <Text style={styles.textStyle}>Creator: {item.creator}</Text>
                <Text style={styles.textStyle}>Genre: {item.genre}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 1,
  },
  textStyle: {
    color: "white",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#009688",
  },
  viewStyles: {
    borderColor: "green",
    padding: 5,
    margin: 20,
  },
});
export default Scrolling;
