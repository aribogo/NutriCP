import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Footer from '../components/Footer';
import FilledButton from '../components/FilledButton';


const styles = StyleSheet.create({});

export default function StepsScreen({navigation}) {
    return (
    <View >
        <Title titleName="PASSO A PASSO"/>
        <Footer height="big"/> 
        <FilledButton navigation={navigation} buttonName="Instrumentos de Avaliação"/>
    </View>
    );
};