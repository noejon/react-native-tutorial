import React from 'react';
import {Modal, View, Image, Button, Text} from 'react-native';
//
import {Item} from '../types/Item';

type Props = DefaultProps;

type DefaultProps = {
    selectedItem?: Item
};

const defaultProps = {
    selectedItem: {
        image: {uri: ''},
        value: ''
    }
}

export const DetailsModal = (props: Props) => {
    const {image, value} = props.selectedItem;
    return (
        <Modal>
            <View>
                <Image source={image}/>
                <Text>
                    {value}
                </Text>
                <View>
                    <Button/>
                    <Button/>
                </View>
            </View>
        </Modal>
    );
}

DetailsModal.defaultProps = defaultProps;   