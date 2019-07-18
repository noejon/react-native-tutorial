import React from 'react';
import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
//
import {InputAdd} from './InputAdd';
import {FlatViewListForModal} from '../containers/FlatViewListForModal';
import {Item} from '../types/Item';
import {DetailsModal} from '../containers/DetailsModal';

export interface Props {
}

interface State {
    items: Item[],
    selectedItem?: Item | null
  }

export class DisplayModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [],
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
    
    onItemSelected = (key: string) => {
        this.setState(prevState => {
            return {
                selectedItem: prevState.items.find(item => item.key === key)
            };
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailsModal selectedItem={this.state.selectedItem}/>
                <InputAdd 
                    buttonText="Add"
                    onButtonClick={this.onItemAddButtonClick}
                    placeholderText="Input something here"
                />
                <FlatViewListForModal 
                    list={this.state.items}
                    onItemSelected={this.onItemSelected}
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