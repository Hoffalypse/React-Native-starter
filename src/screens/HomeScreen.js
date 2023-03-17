import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>Deez Ba Buttons</Text>
      <Button 
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Components')}/>
      <Button 
      style={styles.buttonFormat}
      title="This will take you to the List"
      onPress={() => navigation.navigate('List')}/>
      <Button 
      style={styles.buttonFormat}
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}/>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  // buttonFormat: {
  //   marginVertical:5
  // }
});

export default HomeScreen;
