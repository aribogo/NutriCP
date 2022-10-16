import React from 'react';
import { Button, StyleSheet, Text, View , Alert} from 'react-native';
import Title from '../components/Title';
import Footer from '../components/Footer';
import FilledButton from '../components/FilledButton';
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";


const styles = StyleSheet.create({});

export default function StepsScreen({ navigation }) {

    const { translation } = useTranslation();
    return (
        <View>
            <LanguagePicker />
            <Button title='teste' onPress={() => Alert.alert(translation("stepByStep"))} />
            <Title titleName="PASSO A PASSO" />
            <Footer height="big" />
            <FilledButton navigation={navigation} buttonName="Instrumentos de Avaliação" />
        </View>
    );
};

  //