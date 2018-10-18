
import React from 'react'
import { Image, StyleSheet,Text } from 'react-native'
import { TabNavigator,StackNavigator } from 'react-navigation'
console.disableYellowBox = true;
import ForgetPassword from './ForgetPassword';
//mport { colors, fonts } from '../theme'
import SignIn from './Login'
import SignUp from './Register'

const styles = StyleSheet.create({
  icon: {
    width: 55,
    height:80,
    //paddingTop:300,
   // paddingHorizontal:20,
    marginTop:45
  }
})

const routes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./img/red-line-png-0.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
      
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Signup',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./img/red-line-png-0.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
  
}

const navigationOptions = {
  headerMode: 'none',  headerStyle: {
    header :null,
  } 
}
const routeConfig = {
  tabBarPosition: 'top',
  backgroundColor:'black',
  tabBarOptions: {
    //showLabel: true,
    activeTintColor: "rgb(164,0,0)",
    inactiveTintColor: "black",
    indicatorStyle: { backgroundColor: "grey" },
    labelStyle: {
      //fontFamily: fonts.base,
      fontSize: 18,
      color:"white"
    },
    style: {
      backgroundColor: 'black',
      borderTopWidth: 0,
     // paddingBottom: ,
     paddingTop:10,
    },
    header: {
      visible: false,
    },
  }
}

export default TabNavigator(routes, routeConfig,navigationOptions)