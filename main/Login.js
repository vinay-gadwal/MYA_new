import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,TouchableOpacity,ImageBackground,Image,Alert
} from "react-native";

import ForgetPassword from './ForgetPassword';
import { createStackNavigator } from "react-navigation";
import SplashScreen from 'react-native-splash-screen';
const api = require('./API');
// var Realm = require('realm');
 
// let realm ;
const RootStack = createStackNavigator({
  ForgetPassword: {
      screen: ForgetPassword
    },
  });
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ebabu_4",
      password: "ebabu123",
      loading: false
    };
    // realm = new Realm({
    //   schema: [{name: 'User', 
    //   properties: 
    //   {
    //     user_id: {type: 'int',   default: 0},
    //     username: 'string', 
      
    //   }}]
    // });
  }

  // add_Student(){
 
 
  //   realm.write(() => {
 
  //     var ID = realm.objects('User').length + 1;
 
  //      realm.create('User', {
  //        user_id: ID, 
  //        username: this.state.username, 
         
  //       });
        
  //   });
 
 
  // }
  componentDidMount() {
    SplashScreen.hide()
}

  static createStackNavigator = {
    headerTitle: 'First screen',
    backgroundColor:"black",
    header: {
      visible: false,
    },
  };
  FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('ForgetPassword');

  }

  FunctionToOpenSixthActivity = () =>
  {
     this.props.navigation.navigate('Home');

  }
  
  
//   handleClick(){
//     if(this.state.username == "" || this.state.password == "")
//     {
//       Alert.alert("Enter Valid Email And Password")
//     }
//   else{
//     this.setState({
//       loading: true
//     });

//     fetch(api.base_url + "/alfresco/service/api/login", {
//      method: 'POST',
//      headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json',
//                 },
//       // body : 
//       body: JSON.stringify({
//             username: this.state.username,
//             password: this.state.password,
//            })
//       })
//       .then((response) => response.json())
//       .then((response) => {
//                this.setState({
//                     loading: false
//                 }, ()=>{
//                   if (response && response.data && response.data.ticket) {
//                     console.log(response);
//                      AsyncStorage.setItem('user_ticket', response.data.ticket);
//                       this.props.navigation.navigate('Home');
                      
//                   }else{
//                     this.setState({ spinner: false });
//                     setTimeout(() => {
//                       Alert.alert("Please Enter Valid username And Password");
//                     }, 100);       
                  
//                           }
//                 }
//               );                         
//       })
//       .catch((error) => {
//         alert('There was an error OR Check Your Internet Connection');
//       }).done();
//     }
// }
  render() {
    return (
      // <ImageBackground style={{height:610,width:380}} source={require('./image/spl2x.png')}>

      <View  style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.margin}>User Name</Text>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholderTextColor="black"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="User Name"
          />
          <Text style={styles.margin}>Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            returnKeyType="go"
             secureTextEntry
          />
        </KeyboardAvoidingView>
        <TouchableOpacity  onPress={this.FunctionToOpenSecondActivity}
              >
        <Text style={{color:"white",fontSize:12,marginBottom:5,marginTop:0}}>                                     FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
              style={styles.button}
              // onPress={() => {this.handleClick(); this.add_Student()}}
              // onPress={() => {this.handleClick()}}
              onPressIn={this.FunctionToOpenSixthActivity()}
              >
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
       
        <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{color:"grey",fontSize:12}}>Not Registered? Please </Text>

        <Text  style={{color:"red",fontSize:12}}>Signup</Text>
        </View>
      </View>
      // {/* </ImageBackground> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 50,
    width: 250,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10,
    fontSize:18
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "rgb(164,0,0)",
    //alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  },
  margin:{
    marginBottom:5,
    color:"white",
    //fontSize:12
  },
  Custom:{height:43,marginTop:5,
    width:86,
    marginTop:5,
    marginBottom:30,marginLeft:10

  }
});

AppRegistry.registerComponent("Login", () => Login);
