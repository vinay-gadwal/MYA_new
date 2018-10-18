import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Image style={styles.button}
        source={require('./img/down.png')} />
    </TouchableOpacity>
    <Text onPress={onMessagePress}
      style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button}
        source={require('./img/musicqueue.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    backgroundColor:'grey',
    marginBottom:20,
    marginTop:10
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    opacity: 0.72,
    height:20,
    width:30
  }
});
