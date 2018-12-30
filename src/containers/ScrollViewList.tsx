import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//
import {ListItem} from './ListItem';

export interface Props {
    list: string[],
    onItemDeleted: (index: number) => void
}

export const ScrollViewList = (props: Props) => (
    <ScrollView style={styles.list}>
        {props.list.map((itemValue, i) => (
            <ListItem 
                key={i}
                value={itemValue}
                onPressed={() => props.onItemDeleted(i)}
            />
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
})