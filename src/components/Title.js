import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from '../../utils/screenResizing';


const Title = (props) => {
    return(
        <View style={stylesTitle.background}>
            <Text style={stylesTitle.baseText}  adjustFontSizeToFit>
            {props.titleName}
            </Text>
        </View>
    );
};

const stylesTitle = StyleSheet.create({
    background: {
        backgroundColor: '#1471AB',
        height: moderateScale(90),
        maxWidth: moderateScale(400),
        marginBottom: "2%",
        borderBottomWidth: "15%",
        borderBottomColor: "#7EB4B0",
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        paddingHorizontal: '2%'
    },
    baseText: {
        fontSize: "26vw",
        fontWeight: 'light',
        color: '#FCFFFF',
        textAlign: 'center',
        flexWrap: 'wrap'
      }
});




export default Title;