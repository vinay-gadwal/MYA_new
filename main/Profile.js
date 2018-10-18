import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image, TouchableOpacity
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import MainScreen from "./Setting";
import DetailScreen from "./DrawerHome";
import SideMenu from './Calander'

const stackNav = StackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("SideMenu")}>
                     <Image 
                //style={styles.ButtonStyle1}
                style={{height:28,marginTop:15,
                  width:30,
                  marginTop:5,
                  marginLeft:30}}
                    source={require('./icon/uparrow.png')}
                />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })     
  }
});

export default stackNav;