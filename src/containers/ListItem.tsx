import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface Props {
    value: string,
    onPressed: () => void
}

export const ListItem = (props: Props) => (
    <TouchableOpacity onPress={props.onPressed}>
        <View style={styles.listItem}>
            <Text>{props.value}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#ddd'
    }
})