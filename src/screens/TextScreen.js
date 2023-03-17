import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState} from 'react'

const TextScreen = () => {
const [name, setName] = useState('')
  return (
    <View>
        <Text style={{fontSize:20}}>Enter Password: </Text>
      <TextInput 
      style={styles.input}
      autoCapitalize = 'none'
      autoCorrect={false}
      value={name}
      onChangeText={newValue => setName(newValue)}
      />
      
      {name.length < 5 ? <Text>Your password must be at least 5 character</Text>
      : <Text style={{fontSize:20}}> Password is Sufficient</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        margin: 15,
        borderColor: 'black',
        borderWidth:3, 
        paddingLeft:5

    }
})

export default TextScreen