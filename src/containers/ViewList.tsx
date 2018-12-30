import React from 'react';
import { View, StyleSheet } from 'react-native';
//
import {ListItem} from './ListItem';

export interface Props {
    list: string[],
    onItemDeleted: (index: number) => void
}

export const ViewList = (props: Props) => (
    <View style={styles.list}>
        {props.list.map((itemValue, i) => (
            <ListItem 
                key={i}
                value={itemValue}
                onPressed={() => props.onItemDeleted(i)}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
})