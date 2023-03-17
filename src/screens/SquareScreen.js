import { View, Text } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const increment = 10
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return{...state, red: state.red + action.amount}
            
        case 'green':
            return{...state, green: state.green + action.amount}
            
            case 'blue':
                return{...state, blue: state.blue + action.amount}
        default:
            return state
    }
    
}

const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);


const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})




  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text> rgb({red}, {green}, {blue}) </Text>
    </View>
  );
};

export default SquareScreen;
