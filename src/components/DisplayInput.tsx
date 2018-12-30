import React from 'react';
import {Component} from 'react';
import { View, TextInput, Text } from 'react-native';

export interface Props {
    placeholderText: string
}

interface State {
    value: string
}

export class DisplayInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onInputChange = (value: string) => {
        this.setState({value})
    }

    render() {
        return (
            <View>
                <TextInput 
                    onChangeText={this.onInputChange}
                    placeholder={this.props.placeholderText}
                />
                <Text>
                    {this.state.value}
                </Text>
            </View>
        )
    }
}