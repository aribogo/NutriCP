import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { Button } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import Title from "../../components/Title";
import { PpsDTO } from "../../dto/PpsDTO";
import { scale } from "../../../utils/screenResizing";


const git = [
    {
      label: "TGI funcionante com redução da ingestão oral",
      value: "1",
    },
    {
      label: "TGI funcionante e ingestão oral significativamente comprometida (por exemplo, disfagia, mucosite grave)",
      value: "2",
    },
    {
      label: "Absorção significativamente comprometida (por exemplo, obstrução intestinal) ou falha na nutrição enteral",
      value: "3",
    }
  ];

  const lifeExpectancy = [
    {
      label: "TGI Expectativa de vida: meses ou mais (tratamentos ativos de câncer considerados/ estado pré-caquexia/caquexia) com redução da ingestão oral",
      value: "1",
    },
    {
      label: "Esperança de vida: dias a semanas (câncer progressivo sem opções de tratamento padrão, caquexia refratária)",
      value: "2",
    }
  ];

  var results = new Map([
    [
        label= "Manter a via oral e avaliar a necessidade de terapia nutricionaloral",
        value= "11",
    ],
      [
        label= "Manter a via oral e avaliar a necessidade de terapia nutricional oral",
        value= "12",
      ],
      [
        label= "Considerar a terapia nutricional enteral",
        value= "21",
      ],
     [
        label= "Terapia Nutricional não recomendada. Adotar medidas conservadoras, considerar a hidratação endovenosa",
        value= "22",
     ],
      [
        label= "Considerar a terapia nutricional parenteral",
        value= "31",
  ],
      [
        label= "Terapia Nutricional não recomendada. Adotar medidas conservadoras, considerar a hidratação endovenosa",
        value= "32",
  ],
  ]);


export default function DecisionMakingOnArtificalSupportScreen() {
    const [gitValue, setGit] = useState("1");
    const [lifeExpectancyValue, setlifeExpectancy] = useState("1");
    const [render, setRender] = useState(false);
    const [result, setResult] = useState("");
    const [comps1, setComps1] = useState();
  
    useEffect(() => {
      const comps = [];
      console.log(render);  
      console.log(gitValue+lifeExpectancyValue);

      results.forEach((value, key) => {
          if (JSON.stringify(value.value) === JSON.stringify(gitValue+lifeExpectancyValue)) {
            comps.push(
              <ScrollView>
                <Text key={value} style={result}>
                  {" "}
                  {value}%{" "}
                </Text>
              </ScrollView>
            );
          }
          setComps1(comps);
        });
      
      console.log(render);
    }, [render]);
  
    return (
      <View>
        <Title titleName="TOMADA DE DECISÃO EM RELAÇÃO À NUTRIÇÃO ARTIFICIAL" />
          <Text style={stylesPPS.title}>Condições do TGI e ingestão alimentar</Text>
          <Picker
            selectedValue={gitValue}
            style={stylesPPS.picker}
            itemStyle={stylesPPS.pickerText}
            onValueChange={(itemValue, itemIndex) => setGit(itemValue)}
          >
            {git.map((item, key) => (
              <Picker.Item key={key} label={item.label} value={item.value} />
            ))}
          </Picker>
          <Text style={stylesPPS.title}>Expectativa de vida</Text>
          <Picker
            selectedValue={lifeExpectancyValue}
            style={stylesPPS.picker}
            itemStyle={stylesPPS.pickerText}
            onValueChange={(itemValue, itemIndex) => setlifeExpectancy(itemValue)}
          >
            {lifeExpectancy.map((item, key) => (
              <Picker.Item key={key} label={item.label} value={item.value} />
            ))}
          </Picker>

        <Button
          titleStyle={stylesPPS.baseText}
          buttonStyle={stylesPPS.buttonStyle}
          containerStyle={stylesPPS.containerStyle}
          type="submit"
          onPress={() => {
            {
              setResult(gitValue+lifeExpectancyValue)};
          }}
        >
          Calcular
        </Button>
        {comps1}
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
  
      backgroundColor: "rgba(52, 52, 52, 0)",
    },
    pickerText: {
      fontSize: scale(15),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "left",
      marginRight: scale(10),
      backgroundColor: "rgba(52, 52, 52, 0)",
      height: scale(40),
    },
    pickerText1: {
      fontSize: scale(15),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "left",
      marginLeft: scale(10),
      marginRight: scale(10),
      backgroundColor: "rgba(52, 52, 52, 0)",
      height: scale(40),
    },
    picker: {
      fontSize: scale(10),
      fontWeight: "light",
      color: "#0B3F60",
      textAlign: "justify",
      height: scale(40),
      borderRadius: scale(10),
      marginLeft: scale(5),
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
    resultText: {
      alignSelf: "center",
      textAlign: "center",
      textAlignVertical: "center",
      color: "#0B3F60",
      fontWeight: "bold",
      fontSize: scale(25),
    },
  });
  