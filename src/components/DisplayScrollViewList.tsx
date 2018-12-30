import React from 'react';
import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
//
import {InputAdd} from './InputAdd';
import {ScrollViewList} from '../containers/ScrollViewList';

export interface Props {
}

interface State {
    items: string[]
  }

export class DisplayScrollViewList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: []
        }
    }
      
    onItemAddButtonClick = (value: string) => {
        if(value.trim() === "") return;
        this.setState(prevState => {
            return {
                items: prevState.items.concat(value)
            }
        });
    }
    
    onItemDeleted = (index: number) => {
        this.setState(prevState => {
            return {
                items: prevState.items.filter((item, i) => {
                    return i !== index; 
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <InputAdd 
                    buttonText="Add"
                    onButtonClick={this.onItemAddButtonClick}
                    placeholderText="Input something here"
                />
                <ScrollViewList 
                    list={this.state.items}
                    onItemDeleted={this.onItemDeleted}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Take the whole available width and height
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#FFF',
    }
  });