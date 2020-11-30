import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, restaurants }) => {
  console.log(title, restaurants);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* <Text>Results: {restaurant.lenght}</Text> */}
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
