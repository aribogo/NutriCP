import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import Footer from '../components/Footer';
import FilledButton from '../components/FilledButton';
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";
import TransparentButton from '../components/TransparentButton';

const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];


const styles = StyleSheet.create({});

export default function StepsScreen({ navigation }) {

    const { t } = useTranslation();
    return (
        <View>
            <Title titleName={t("stepByStep")} />
            <FilledButton navigation={navigation} buttonName="Instrumentos de Avaliação" />
            <TransparentButton data={data}/>
            <Footer height="big" />
        </View>
    );
};
