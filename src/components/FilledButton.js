import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text } from 'react-native';


const FilledButton = (props) => {

    return (
        <Button
            style={stylesButton.buttonStyle}
            onPress={() => props.navigation.navigate('Assessment')}
            title="INSTRUMENTOS DE AVALIAÇÃO"
        >  
        </Button>
    );
};

const stylesButton = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7EB4B0',
        height: 30
    },
    baseText: {
        fontSize: 40,
        fontWeight: 'light',
        color: '#FCFFFF',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Arial',
    }
});

export default FilledButton;