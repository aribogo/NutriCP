import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text } from 'react-native';

const FilledButton = (buttonName, {navigation }) => {
    return (
        <Button
            style={stylesButton.buttonStyle}
            navigation={navigation}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Assessment')}> 
                    <Text>{buttonName}</Text>
                    </TouchableOpacity>
                )
            }
            }
            title="Go to Details... again"
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