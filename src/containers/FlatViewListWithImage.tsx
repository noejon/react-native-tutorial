import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
//
import {ListItem} from './ListItem';

export interface Props {
    list: any[],
    onItemDeleted: (key: number) => void
}

export const FlatViewListWithImage = (props: Props) => (
    <FlatList 
        style={styles.list}
        data={props.list}
        renderItem={(info) => (
            <ListItem 
                value={info.item.value}
                image={info.item.image}
                onPressed={() => props.onItemDeleted(info.item.key)}
            />
        )}
    />
);

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
})