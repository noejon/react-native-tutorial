import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export interface Props {
    image?: any,
    onPressed: () => void
    value: string,
}

export const ListItem = (props: Props) => (
    <TouchableOpacity onPress={props.onPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.image} style={styles.image}/>
            <Text>{props.value}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        marginRight: 8,
        width: 30,
        height: 30
    }
})