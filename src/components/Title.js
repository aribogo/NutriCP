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
    },
    baseText: {
        fontSize: moderateScale(25),
        fontWeight: 'light',
        color: '#FCFFFF',
        textAlign: 'center',
        marginTop: moderateScale(10),
        flexWrap: 'wrap'
      },
      styleDash: {
        height: moderateScale(18),
        maxWidth: moderateScale(400),
        justifyContent: 'space-between',
        backgroundColor: '#7EB4B0', 
        marginTop:  moderateScale(14),
        bottom: 0,
    }
});



export default Title;