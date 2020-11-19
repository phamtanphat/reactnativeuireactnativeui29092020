/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Screen 3 </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.replace('Screen1')}
          style={{backgroundColor: 'yellow', padding: 10}}>
          <Text style={{fontSize: 20}}>Navigate Screen 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
