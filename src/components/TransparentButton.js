import React, {ReactElement, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View,FlatList } from 'react-native';
import { Icon } from '@rneui/base';
import { scale } from '../../utils/screenResizing';

const TransparentButton = (props) => {

    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const renderDropdown = ({value}) => {
        if (visible) {
            return (
                <Text style={stylesButton.contentText}>
                    {value}
                </Text>
            );
        }
    };

    const renderItem = ({data}) => {
        <TouchableOpacity
        style={stylesButton.button}
        onPress={toggleDropdown}
    >
        <Text style={stylesButton.buttonText}>{data.label}</Text>
        <Icon type='font-awesome' name='fa chevron-down' style={stylesButton.fa}/>
        {renderDropdown(data.value)}
    </TouchableOpacity>
    }

    return (
            <View >
            <FlatList
                data={props.data}
              renderItem={renderItem(props.data)}
            />
          </View>
    );
};

//style={[styles.dropdown, { top: dropdownTop }]}
//data={data}
// keyExtractor={(item, index) => index.toString()}

// type="outline" 

const stylesButton = StyleSheet.create({
    button: {
        borderColor: '#7EB4B0',
        borderWidth: scale(1),
        height: scale(50),
        borderRadius: scale(10),
        width: scale(350),
        alignItems: 'center',

    },
    buttonText: {
        flex: 1,
        fontSize: scale(15),
        fontWeight: 'light',
        color: '#7EB4B0',
        textAlign: 'center',
    },
    contentText: {
        position: 'absolute',
        fontSize: scale(17),
        fontWeight: 'light',
        color: '#0B3F60',
        textAlign: 'justify',
    },
    icon: {
        color: '#7EB4B0',
        width: scale(20),
        alignSelf: 'flex-start',
        left: scale(10)
    },
    fa: {
        color: '#7EB4B0',
        width: scale(20),
        alignSelf: 'flex-start',
        left: scale(10)
    }


});

export default TransparentButton;