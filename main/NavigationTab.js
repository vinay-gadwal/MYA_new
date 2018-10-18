
import React,{Component} from 'react'
import { View,Button, StyleSheet,Text } from 'react-native'
import { StackNavigator ,TabNavigator } from 'react-navigation'
console.disableYellowBox = true;
import ForgetPassword from './ForgetPassword';
//mport { colors, fonts } from '../theme'
// import SignIn from './Login'
// import SignUp from './Register'
// import App from './App'
// import Scroll from './Click_On_Album'
// import Album from './Album'
// import Music from './musicPlay'
// import Home from './Home'
// import StartClass from './Start_Class'


class Registerscreen extends Component{
  
  render(){
    return(
        <View><Text> Registerscreen</Text></View>
      )
  }
}



class Home extends Component{
  
  render(){
    return(
        <View>
        <Text> Home</Text>
        
        </View>
        
      )
  }
}

class Settings extends Component{
  
  render(){
    return(
        <View>
        <Button onPress={() => this.props.navigation.navigate('Registerscreen')} title="go to Registerscreen"> </Button>
        <Text> Setting</Text></View>
      )
  }
}
const Tabs = TabNavigator({
    "Home":{screen:Home},
    "Settings":{screen:Settings}
})


const Section = StackNavigator({
        "Tabs":{screen: Tabs},
       "Registerscreen": { screen: Registerscreen },
       
    },{
      navigationOptions: {
        header:null,
        headerBackTitle:'hello',
            headerStyle: {
              header:null,
              
            },
  
  
          },
          header: {
            visible: false,
          },
    }
  );
export default Section


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
