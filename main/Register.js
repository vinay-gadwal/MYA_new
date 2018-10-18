import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,Button,TouchableOpacity
} from "react-native";
const api = require('./API');
import {KeyboardAwareScrollView, KeyboardAwareListView} from 'react-native-keyboard-aware-scrollview'
import { StackNavigator } from "react-navigation";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
             userName: "",
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             loading:false
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "black",
      elevation: null
    }
  };
  FunctionToOpenFourthActivity = () =>
  {
     this.props.navigation.navigate('Fourth');
     
  }

  
  handleClick(){
    if(this.state.userName == "" && this.state.firstName =="" && this.state.lastName==""&& this.state.password =="" && this.state.email== "" )
    {
      Alert.alert("Enter Data in All Field")
      // console.log("empty data")
    }
  else{
    this.setState({
      loading: true
    });

    fetch(api.base_url + "/alfresco/service/api/people", {
  
     method: 'POST',
     headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic YWRtaW46OTVTalh1aFFzZ2hY'
                },
        
      // body : 
      body: JSON.stringify({
        userName: this.state.userName,
            firstName: this.state.firstName,
            lastName : this.state.lastName,
            email:this.state.email,
            password:this.state.password
           })
      })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
             loading: false
         }, ()=>{
           if (response.userName == this.state.userName ) {
             console.log(response);
              // AsyncStorage.setItem('user_ticket', response.data.ticket);
                  this.props.navigation.navigate('Home')            
           }else{
             this.setState({ spinner: false });
             setTimeout(() => {
               Alert.alert("User Name Already Exist , Choose Another UserName");
             }, 100);       
           
                   }
         }
       );                         
})
      
     
      .done()      
                  
    }
}


  render() {
    return (
      <View behavior="padding" style={styles.container}>
        {/* <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./banana.png")} />
          <Text style={styles.subtext}>Sign Up:</Text>
        </View> */}
        <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 keyboardShouldPersistTaps={true} >
          <Text style={styles.margin}>User Name</Text>
          <TextInput
            value={this.state.userName}
            onChangeText={userName => this.setState({ userName })}
            style={styles.input}
            placeholder="UserName"
            placeholderTextColor="black"
            autoCapitalize="none"
            returnKeyType="next"
            // onSubmitEditing={() => this.emailInput.focus()}
          />
          <Text style={styles.margin}>First Name</Text>
          <TextInput
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
            style={styles.input}
            placeholderTextColor="black"
            returnKeyType="next"
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="First Name"
          />
          <Text style={styles.margin}>Last Name</Text>
          <TextInput
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
            style={styles.input}
            placeholder="Last Name"
            autoCapitalize="none"
            placeholderTextColor="black"
            autoCorrect={false}
            // ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
          />
          <Text style={styles.margin}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            returnKeyType="next"
            // onSubmitEditing={() => this.emailInput.focus()}
          />
          <Text style={styles.margin}>Password</Text>
          <TextInput
            value={this.state.password}
            // onChangeText={password_confirmation => this.setState({ password_confirmation })}    
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            returnKeyType="go"
            ref={input => (this.passwordInput = input)}
             secureTextEntry
          />
       
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleClick()}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <View style={{flexDirection:"row",marginTop:0,marginBottom:30}}>
        <Text style={{color:"grey",fontSize:12}}>Registered? Please </Text>
        
        <Text style={{color:"red",fontSize:12}}>Login</Text>
       
        </View>
        </KeyboardAwareScrollView>
      </View>
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
    marginBottom: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "black",
    paddingHorizontal: 10,
    fontSize:18

  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "rgb(164,0,0)",
    //alignSelf: "stretch",
    marginTop:2,
    justifyContent: "center",
    marginBottom:30
 
   
  },
  buttonText: {
    fontSize: 18,
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
    color:"white"
  }
});

// AppRegistry.registerComponent("Register", () => Register);