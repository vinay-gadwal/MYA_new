import React,{Component} from 'react'
import { StyleSheet,ImageBackground, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './Login'
import SignUp from './Register'
import ForgetPassword from './ForgetPassword';
import App from './App'
import Scroll from './Click_On_Album'
import Album from './Album'
import Music from './musicPlay'
import Home from './Home'
import MyFlatList from './components/flatList/FlatList'
import StartClass from './Start_Class'
import Drawer from './DrawerNavigation'
import Slider from './components/SliderEntry'
import MyDrawerNavigator from './DrawerNavigation'
class LoginActivity extends Component {

constructor(props) {
    super(props);
  }

UserLoginFunction = () =>{

        this.props.navigation.navigate('ForgetPassword');
  }

  render() {
    return (
<ImageBackground style={{height:610,width:380}} source={require('./image/spl2x.png')}>
<App  />
</ImageBackground>

    );
  }
}

export default MainProject = StackNavigator(
{
  Drawer :{screen:Drawer},
  LoginActivity : {screen :LoginActivity},
  App: { screen: App },
   ForgetPassword: { screen: ForgetPassword },
   Third: { screen: SignIn },
   SignUp: { screen: SignUp },
   Scroll: { screen : Scroll},
   Sixth:{screen: Album} ,
   Music :{screen :Music},
   Home : {screen: Home},
   StartClass:{screen : StartClass},
   Slider : {screen:Slider},
   MyDrawerNavigator :{ screen:MyDrawerNavigator
   }
},{
    initialRouteName: 'App',
   
    navigationOptions: {
          headerStyle: {
            headerMode: 'none',
            headerTransitionPreset: 'fade-in-place',
            backgroundColor:'black',
            header:null,
          },
          headerTitle: (
            <Image style={{height:50,width:60,marginBottom:17}} source={require('./icon/logo-icon.png')}/>
        ),
          


        },
        header: {
          visible: false,
        },
  });

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
flex:1,
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: 'black',
  borderRadius: 5 ,
},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center',
  marginBottom: 15
 }
});
