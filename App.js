import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CompnentsScreen from "./src/screens/CompnentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: CompnentsScreen,
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
