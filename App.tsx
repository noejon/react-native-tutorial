/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export interface Props {
}

interface State {
  placeName: string
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      placeName: ''
    };
  }

  onPlaceNameChanged = (event: any) => {
    alert(event);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.placeName}
          onChangeText={this.onPlaceNameChanged}
          style={{width: 300, borderColor: "black", borderWidth: 1}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
