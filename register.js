import React from 'react';
import { Text, View,TextInput,Button} from 'react-native';

import  { Component } from 'react';



export default class HelloWorldApp extends Component {
    
  render() {
    
    return (
      <View>

      <Text style={{ textAlign: "center", fontSize: 20 }}>CPH BUSSINESS COPENHAGEN</Text>

      <TextInput 
      placeholder= "Enter your email adress here" style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({text})}
      />

      <TextInput
      placeholder= "Enter your password here" style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({text})}
      />
      <TextInput
      placeholder= "Enter your password igen" style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({text})}
      />
      <Button  title="Submit" />
      </View>

    );
  }
}

