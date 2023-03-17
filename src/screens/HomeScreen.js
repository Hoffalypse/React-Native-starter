import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}> Da Nav Buttons</Text>
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
      <Button 
      style={styles.buttonFormat}
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}/>
      <Button 
      style={styles.buttonFormat}
      title="Go to Color Demo"
      onPress={() => navigation.navigate('Color')}/>
      <Button 
      style={styles.buttonFormat}
      title="Go to Color Changer Demo"
      onPress={() => navigation.navigate('Square')}/>
      <Button 
      style={styles.buttonFormat}
      title="Go to Text Input Demo"
      onPress={() => navigation.navigate('Text')}/>
        
      
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
