import React, { ReactElement, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { Icon } from '@rneui/base';
import { scale } from '../../utils/screenResizing';

const TransparentButton = (props) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);

    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = () => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py - h);
        });
    }

        const renderDropdown = (item) => {
            setSelected(item);
            onSelect(item);
            setVisible(false);

            if (visible) {
                return (
                    <Text style={stylesButton.contentText}>
                        {item.value}
                    </Text>
                );
            }
        };

        const renderItem = (item) => {
            return (
                <TouchableOpacity
                    style={stylesButton.button}
                    onPress={toggleDropdown}
                >
                    <Text style={stylesButton.buttonText}>{item.label}</Text>
                    <Icon type='font-awesome' name='chevron-down' style={stylesButton.icon} />
                    {renderDropdown(item)}
                </TouchableOpacity>
            );
        }

        return (

            <FlatList
                data={props.data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />

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
            // left: scale(10)
        }


    });

    export default TransparentButton;
