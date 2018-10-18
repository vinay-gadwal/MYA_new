import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import Home from './Home'

class HamburgerIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);
    
    this.props.navigationProps.toggleDrawer();

  }
 
  render() {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 5}}
          />

        </TouchableOpacity>
 
      </View>
    
    );
  
  
  }
}
 

 
    const FirstActivity_StackNavigator = StackNavigator({
      First: { 
        screen: Home, 
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: '#fff',
        })
      },
    });


   
    
export default MyDrawerNavigator = DrawerNavigator({
  MainStack: { 
    screen: FirstActivity_StackNavigator
  },

 
},
);

    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  }

});