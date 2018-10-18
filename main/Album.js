import React from 'react';
import { View, Text ,Button,TouchableOpacity,Image,Icon} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Scroll from './Click_On_Album'
import Music from './musicPlay';

class DetailsScreen extends React.Component {
    constructor(){
        super()
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Second')}
          />
        </View>
      );
    }
  }
  

  export default MainProject = createStackNavigator(
    {
       First: { screen: DetailsScreen },
       Second: { screen: Scroll },
       Third : {screen : Music}
          
    },{
        initialRouteName: 'First',
        navigationOptions: {
          headerStyle: {
            backgroundColor: 'black',
            marginBottom:0,
            marginEnd:0
          },
          headerBackImage: <Image style={{    height:30,
                                    width:30,
                                    marginTop:40,
                                    marginBottom:40,
                                    marginLeft:15,
                                    marginRight:10}} source={require('./icon/back.png')}
                             />,
        //  headerRight: (
        //                         <Button style={{color:'black',marginBottom:5}}
        //                           onPress={() => alert('This is a button!')}
        //                           title="Info"
                                  
        //                         />
        //                       ),
          headerBackTitle:'Bodypump 106',
        headerBackTitleStyle:{
                    color:'black'
        },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          marginBottom:0,
          padding:0,
        },
      });
     