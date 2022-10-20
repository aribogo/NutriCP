import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from '../../utils/screenResizing';


const Footer = (props) => {
    const height = props.height;

    if (props.height == 'small') {
        return (
            <View style={stylesFooter.smallerHeight}>
            </View>
        );
    } else if (props.height == 'big') {
        return (
            <View style={stylesFooter.biggerHeight}>
            </View>
        );
    }
};

const stylesFooter = StyleSheet.create({
    smallerHeight: {
        backgroundColor: '#1471AB',
        height: scale(100),
        position: 'relative',
        bottom: scale(-400)
    },
    biggerHeight: {
        backgroundColor: '#1471AB',
        height: scale(300),
        padding: scale(100),
        flex: 1,
        position: 'fixed',
        justifyContent: 'flex-end',
        top: scale(300)
    }
});


export default Footer;