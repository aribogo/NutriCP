import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Title from "../../components/Title";
import FilledButton from "../../components/FilledButton";
import Explain from "../../components/Explain";
import Footer from "../../components/Footer";

/*  "subtopics": [
      {
        "label": "Saiba mais sobre os métodos de avaliação nutricional",
        "content": "Em pacientes em cuidados paliativos, a avaliação do EN precede qualquer conduta nutricional, devendo incluir:",
        "examples": [
          {
            "title": "Triagem Nutricional",
            "link": "kffkfgkk",
            "isInternal": true
          },
          {
            "title": "Avaliação da história clínica e dietética",
            "link": "kffkfgkk",
            "isInternal": true
          },
          { "title": "Avaliação antropométrica",
           "link": "kffkfgkk",
           "isInternal": true },
           { "title": "Força de preensão palmar",
           "link": "kffkfgkk",
           "isInternal": true },
           { "title": "Semiologia nutricional",
           "link": "kffkfgkk",
           "isInternal": true }
        ]
      }, */

const result90Plus = [
    {
        label : "Objetivos da terapia nutricional",
        content: "- Prevenir ou minimizar os déficits nutricionais;\n- Reduzir complicações da desnutrição;\n- Controlar sintomas e evitar desidratação;\n- Promover conforto emocional e melhora da autoestima;\n- Melhorar capacidade funcional;\n- Melhorar a QV;\n- Considerar aspectos bioéticos relacionados à: autonomia, beneficência, não maleficência e justiça;\n- Avaliar desejos e valores do paciente",
        examples: null
    },
    {
        label : "critérios para indicar terapia nutricional",
        content: "Todos os pacientes com risco nutricional e/ou presença de desnutrição.",
        examples: null
    },
    {
        label : "Ínicio da terapia nutricional deve, quando indicada",
        content: "O mais precoce possível na presença de estabilidade hemodinâmica",
        examples: null
    },
    {
        label : "Contraindicações da terapia nutricional",
        content: "TNO:\n- Ingestão alimentar >70% das necessidades nutricionais;\n- Queda do nível de consciência;\n- TGI não funcionante;\n- Instabilidade hemodinâmica;\n\nTNE:\n- Ingestão alimentar via oral > 60% das necessidades nutricionais;\n- TGI não funcionante;\n- Instabilidade hemodinâmica;\n\nTNP:\n- TGI funcionante;\n- Instabilidade hemodinâmica;\n\-PS ≤ 2; ou KPS ou PPS ≤50%.",
        examples: null
    },
]     

const result90 = [
    {
        label : "Objetivos da terapia nutricional",
        content: "- Minimizar os déficits nutricionais;\n- Controlar sintomas e evitar desidratação;\n- Promover conforto emocional e melhora da autoestima;\n- Melhorar a QV;\n- Considerar aspectos bioéticos relacionados à: autonomia, beneficência, não maleficência e justiça;\n- Avaliar desejos e valores do paciente.",
        examples: null
    },
    {
        label : "critérios para indicar terapia nutricional",
        content: "Todos os pacientes com risco nutricional e/ou presença de desnutrição, devendo o paciente apresentar PS ≤ 3; e KPS ou PPS ≥ 30%.",
        examples: null
    },
    {
        label : "Ínicio da terapia nutricional deve, quando indicada",
        content: "O mais precoce possível na presença de estabilidade hemodinâmica.",
        examples: null
    },
    {
        label : "Contraindicações da terapia nutricional",
        content: "TNO:\n- Queda do nível de consciência;\n- TGI não funcionante;\n- Instabilidade hemodinâmica;\n\nTNE:\n- TGI não funcionante;\n- Instabilidade hemodinâmica;\n\nTNP:\n- Não oferece benefícios nesse estágio da doença.",
        examples: null
    },
]

const careIntheEnd = [
    {
        label : "Objetivos da terapia nutricional",
        content: "- Promover conforto e melhora da Qualidade de Vida;\n- Considerar aspectos bioéticos relacionados à: autonomia, beneficência, não maleficência e justiça;\n- Avaliar desejos e valores do paciente quanto à manutenção ou à suspensão da dieta.",
        examples: null
    },
    {
        label : "critérios para indicar terapia nutricional",
        content: "Não há indicação.",
        examples: null
    },
    {
        label : "Ínicio da terapia nutricional deve, quando indicada",
        content: "Não se aplica.",
        examples: null
    },
    {
        label : "Contraindicações da terapia nutricional",
        content: "Não se aplica.",
        examples: null
    },
]

export default function NutritionalSupportIndicationCancerScreen(props) {
  let data = props.route.params.data;

  const renderItem = ({ item }) => {

    return (
      <FilledButton
        navigation={props.navigation}
        buttonName={item.label}
        screen={item.link}
        data={null}
      />
    );
  };

  return (
    <View>
      <Title titleName={data.mainTitle} />
      <Text style={stylesPPS.title}>Expectativa de vida</Text>
      <RNPickerSelect 
        style={stylesPPS.picker}
        items={[
            {label: "90+", value: "Maior que 90 dias"},
            {label: "90-", value: "Igual ou menor que 90 dias"},
            {label: "--", value: "Cuidado ao fim da vida"},
        ]}
        onValueChange={(itemValue, itemIndex) => setGit(itemValue)}
        useNativeAndroidPickerStyle = {false}
      />
    </View>
  );
}

const stylesPPS = StyleSheet.create({
    title: {
      fontSize: scale(16),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "left",
      marginLeft: scale(10),
      marginRight: scale(10),
      marginTop: "5%",
      backgroundColor: "rgba(52, 52, 52, 0)",
    },
    pickerText: {
      fontSize: scale(15),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "left",
      marginRight: scale(10),
      backgroundColor: "rgba(52, 52, 52, 0)",
      height: scale(50),
      flexWrap: 'wrap',
       flex: 1
    },
    picker: {
      fontSize: scale(10),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "justify",
      height: scale(50),
      borderRadius: scale(10),
      marginLeft: scale(5),
      flexDirection: 'row'
    },
    buttonStyle: {
      backgroundColor: "#7EB4B0",
      height: scale(50),
      borderRadius: scale(100),
      width: scale(200),
      alignItems: "center",
    },
    baseText: {
      fontSize: scale(20),
      fontWeight: "light",
      color: "#FCFFFF",
      textAlign: "center",
    },
    containerStyle: {
      marginHorizontal: scale(70),
      marginVertical: scale(10),
    },
    resultTitle: {
      alignSelf: "center",
      marginTop: "1%",
      marginBottom: "1%",
      textAlign: "center",
      textAlignVertical: "center",
      color: "#0B3F60",
      fontWeight: "800",
      fontSize: scale(25),
    },
    resultText: {
      alignSelf: "center",
      textAlign: "center",
      textAlignVertical: "center",
      color: "#0B3F60",
      fontWeight: "300",
      fontSize: scale(20),
    },
  });