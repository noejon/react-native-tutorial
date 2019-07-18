import React from 'react';
import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
//
import {InputAdd} from './InputAdd';
import {FlatViewListWithImage} from '../containers/FlatViewListWithImage';

export interface Props {
}

interface State {
    items: any[]
  }

export class DisplayWebImage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: []
        }
    }
      
    onItemAddButtonClick = (itemValue: string) => {
        if(itemValue.trim() === "") return;
        this.setState(prevState => {
            return {
                items: prevState.items.concat({
                    key: `${Math.random()}`,
                    value: itemValue,
                    image: {
                        uri: 'https://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg'
                    }
                })
            }
        });
    }
    
    onItemDeleted = (key: number) => {
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.key !== key)
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
                <FlatViewListWithImage 
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