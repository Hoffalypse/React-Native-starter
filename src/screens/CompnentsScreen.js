import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CompnentsScreen = () => {
    const myName = 'Bryan'
  return (
        <View>
      <Text style={styles.textStyle}>Getting Started With React Native</Text>
      <Text style={styles.nameSize}>My name is {myName}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameSize: {
        fontSize:20
    }
})

export default CompnentsScreen