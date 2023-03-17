import { View, Text } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const increment = 10;
const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "red", payload: increment })}
        onDecrease={() => dispatch({ type: "red", payload: -1 * increment })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: increment })}
        onDecrease={() => dispatch({ type: "green", payload: -1 * increment })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: increment })}
        onDecrease={() => dispatch({ type: "blue", payload: -1 * increment })}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        {" "}
        rgb({red}, {green}, {blue}){" "}
      </Text>
    </View>
  );
};

export default SquareScreen;
