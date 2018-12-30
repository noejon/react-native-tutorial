import React from 'react';
import {Component} from 'react';
//
import {DisplayFlatList} from './src/components/DisplayFlatList';

export interface Props {}

interface State {}

export class App extends Component<Props, State> {
  

  render() {
    return (
      <DisplayFlatList/>
    );
  }
}
