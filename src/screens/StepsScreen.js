import React from 'react';
import { Button, StyleSheet, Text, View , Alert} from 'react-native';
import Title from '../components/Title';
import Footer from '../components/Footer';
import FilledButton from '../components/FilledButton';
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";


const styles = StyleSheet.create({});

export default function StepsScreen({ navigation }) {

    const { t } = useTranslation();
    return (
        <View>
            <Title titleName= {t("stepByStep")} />
            <Footer height="big" />
            <FilledButton navigation={navigation} buttonName="Instrumentos de Avaliação" />
        </View>
    );
};
