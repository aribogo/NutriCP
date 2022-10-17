import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/base';


const FilledButton = (props) => {

    return (
        <><Button
            title="HOME"
            icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
            }}
            containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
            }} /></>
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

/* <Button
                style={stylesButton.buttonStyle}
                onPress={() => props.navigation.navigate('Assessment')}
                title="INSTRUMENTOS DE AVALIAÇÃO"
            >
            </Button> */
