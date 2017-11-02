import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import login from"./login.js";
import register from"./register.js";
import  { Component } from 'react';


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'CPH BUSSINESS' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
      <Text style={{ textAlign: "center", fontSize: 20 }}>CPH BUSSINESS COPENHAGEN</Text>
       
      <Touchable onPress={() => navigate('login')} title="LOG IND" />
      <Touchable onPress={() => navigate('register')} title="Register" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  login: { screen: login },
  register: { screen: register}
  
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})
