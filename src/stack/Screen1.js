/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen1 extends Component {
  componentDidMount() {
    const {text} = this.props.route.params;
    alert(text);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Screen 1 </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Screen2', {text: 'Hello screen 2'})
          }
          style={{backgroundColor: 'red', padding: 10}}>
          <Text style={{fontSize: 20}}>Navigate Screen 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
