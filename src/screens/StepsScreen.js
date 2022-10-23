import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import Footer from '../components/Footer';
import FilledButton from '../components/FilledButton';
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";
import TransparentButton from '../components/TransparentButton';

const data = [
    { label: 'One', value: '1', id: 1,
        explain:'Porque a galinha atravessa a rua?',
        docs:[
             {label: 'Paliiati ', link:'kffkfgkk'},
             {label: 'Paliiati ', link:'kffkfgkk'}
        ] },
    { label: 'Two', value: '2', id: 2  },
    { label: 'Three', value: '3', id: 3  },
    { label: 'Four', value: '4', id: 4  },
    { label: 'Five', value: '5', id: 5  },
  ];


const styles = StyleSheet.create({});

export default function StepsScreen({ navigation }) {

    //const [selected, setSelected] = useState(undefined);

    const { t } = useTranslation();
    return (
        <View>
            <Title titleName={t("stepByStep")} />
            <FilledButton navigation={navigation} buttonName="Instrumentos de Avaliação" />
            <TransparentButton data={data} />
            <Footer height="big" />
        </View>
    );
};
