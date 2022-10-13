import React from 'react';
import { StyleSheet, View } from 'react-native';

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
        height: 100,
        position: 'relative',
        bottom: -670
    },
    biggerHeight: {
        backgroundColor: '#1471AB',
        height: 300,
        position: 'relative',
        bottom: -450
    }
});


export default Footer;