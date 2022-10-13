import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = (props) => {
    return(
        <View style={stylesTitle.background}>
            <Text style={stylesTitle.baseText}>
            {props.titleName}
            </Text>
            <View style={stylesTitle.styleDash}>
            </View>
        </View>
    );
};

const stylesTitle = StyleSheet.create({
    background: {
        backgroundColor: '#1471AB',
        height: 100
    },
    baseText: {
        fontSize: 40,
        fontWeight: 'light',
        color: '#FCFFFF',
        textAlign: 'center',
        marginTop: 30,
        fontFamily: 'Arial',
      },
      styleDash: {
        height: 20,
        justifyContent: 'space-between',
        backgroundColor: '#7EB4B0', 
        marginTop: 20,
        bottom: 0,
    }
});



export default Title;