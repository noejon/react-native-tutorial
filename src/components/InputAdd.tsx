import React from 'react';
import {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export interface Props {
    buttonText: string,
    onButtonClick: (value: string) => void,
    placeholderText: string,
}

interface State {
    value: string
}

export class InputAdd extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onInputValueChanged = (value: string) => {
        this.setState({value});
    }

    render(){
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={this.onInputValueChanged}
                    placeholder={this.props.placeholderText}
                    style={styles.input}
                />
                <View style={styles.button}>
                    <Button 
                        title={this.props.buttonText}
                        onPress={() => this.props.onButtonClick(this.state.value)}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%'
  },
  button: {
    width: '30%'
  }
})