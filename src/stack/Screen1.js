/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Count {this.state.count} </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Screen2', {count: this.state.count})
          }
          style={{backgroundColor: 'red', padding: 10}}>
          <Text style={{fontSize: 20}}>Navigate Screen 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
