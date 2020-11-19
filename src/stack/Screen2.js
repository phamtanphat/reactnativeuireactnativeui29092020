/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Screen 2 </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen3')}
          style={{backgroundColor: 'blue', padding: 10}}>
          <Text style={{fontSize: 20}}>Navigate Screen 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
