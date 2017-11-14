import React from 'react';
import { Text, View,TextInput,Button} from 'react-native';

import  { Component } from 'react';



export default class HelloWorldApp extends Component {
  constructor(props)
  {
      super(props);
      this.state = {userName: '', password:'', passwordIgen:''}
      
  }
    
  render() {
    
    return (
      <View>

      <Text style={{ textAlign: "center", fontSize: 20 }}>CPH BUSSINESS COPENHAGEN</Text>

      <TextInput 
      placeholder= "Enter your email adress here"  placeholder = {this.props.placeholder} style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({userName: text})}
      />

      <TextInput
      placeholder= "Enter your password here"  placeholder = {this.props.placeholder} style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({password:text})}
      />
      <TextInput
      placeholder= "Enter your password igen"  placeholder = {this.props.placeholder} style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({passwordIgen: text})}
      />
      <Button  title="Submit" />
      </View>

    );
  }
}

