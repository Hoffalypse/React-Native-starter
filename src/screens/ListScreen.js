import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {
const friends = [
    {name: 'friend1', age:20},
    {name: 'friend2', age:45},
    {name: 'friend3', age:32},
    {name: 'friend4', age:27},
    {name: 'friend5', age:56},
    {name: 'friend6', age:30},
    {name: 'friend7', age:40},
    {name: 'friend8', age:42},
    {name: 'friend9', age:16},
]

  return (
    <View>
      <FlatList 
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>

      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        
        marginHorizontal:20,
        borderWidth:2,
        padding:5
        
    }
})

export default ListScreen