import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CompnentsScreen from "./src/screens/CompnentsScreen";
import ListScreen from "./src/screens/ListScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: CompnentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
