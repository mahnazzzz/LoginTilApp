import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import InputField from './InputField';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
      <InputField placeholder= "Enter your email adress here"></InputField> 
      <InputField placeholder= "Enter your password here"></InputField>
      <Button style={{ textAlign: "center", fontSize: 20 }}
      
      title="Log in"
      color="#841584"
     
    />
      </View>

    );
  }
}