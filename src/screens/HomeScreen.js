import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Brah</Text>
      <Text>Hi There</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
