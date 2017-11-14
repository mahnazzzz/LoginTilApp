import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class InputField extends Component {
  constructor(props)
  {
      super(props);
      this.state = {userName: '', password:''}
      
  }
  render() {
    return (
      <TextInput // lave et style sheet til input og lave en seperat compounent
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
        onChangeText={(text) => this.setState({ userName : text})}

        
        />
        
          
         
        

        
        
    );
  }

}