import { AppRegistry } from "react-native";
import App from "./main/Navigation";
import { name as appName } from "./app.json";  
//import test from './main/TEST'
AppRegistry.registerComponent(appName, () => App);