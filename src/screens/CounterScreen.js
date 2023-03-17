import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  
  switch (action.type) {
    case "goUp":
      return {...state, counter: state.counter + action.payload};

    case "goDown":
      return {...state, counter: state.counter - action.payload};

    default:
      return state;
  }
};

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, { counter: 0 });



  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "goUp", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "goDown", payload: 1 });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;
