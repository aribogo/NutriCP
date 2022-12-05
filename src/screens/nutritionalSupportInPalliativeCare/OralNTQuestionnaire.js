import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { Button } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import Title from "../../components/Title";
import { scale } from "../../../utils/screenResizing";

const yesOrNo = [
  {
    label: "yes",
    value: "Sim",
  },
  {
    label: "no",
    value: "Não",
  },
];

export default function OralNTQuestionnaire() {
  const [GITIntact, setGITIntact] = useState("yes");
  const [weightLoss, setWeightLoss] = useState("yes");
  const [render, setRender] = useState(false);
  const [render2, setRender2] = useState(false);
  const [firstResult, setfirstResult] = useState();
  const [finalResult, setfinalResult] = useState();

  useEffect(() => {
    const comps = [];

    if (JSON.stringify(GITIntact) === JSON.stringify("no")) {
      comps.push(
        <ScrollView>
          <Text style={stylesPPS.resultTitle}>Resultado</Text>
          <Text style={stylesPPS.resultText}>
            {
              "Considerar via alternativa de alimentação (Nutrição e hidratação artificiais)"
            }
          </Text>
        </ScrollView>
      );
    } else if (JSON.stringify(GITIntact) === JSON.stringify("yes")) {
      let pickerTitle =
        "Paciente com perda de peso, desnutrido ou com ingestão insuficiente de nutrientes (< 70% das necessidades nutricionais)";
      comps.push(
        <ScrollView>
          <Text style={stylesPPS.title}>{pickerTitle}</Text>
          <Picker
            selectedValue={GITIntact}
            style={stylesPPS.picker}
            itemStyle={stylesPPS.pickerText}
            onValueChange={(itemValue, itemIndex) => setWeightLoss(itemValue)}
          >
            {yesOrNo.map((item, key) => (
              <Picker.Item key={key} label={item.value} value={item.label} />
            ))}
          </Picker>
          <Button
            titleStyle={stylesPPS.baseText}
            buttonStyle={stylesPPS.buttonStyle}
            containerStyle={stylesPPS.containerStyle}
            type="submit"
            onPress={() => {
              {
                setRender(!render2);
              }
            }}
          >
            Calcular
          </Button>
        </ScrollView>
      );
    }
    setfirstResult(comps);
  }, [render]);

  useEffect(() => {
    const comps = [];

    if (JSON.stringify(weightLoss) === JSON.stringify("no")) {
      comps.push(
        <ScrollView>
          <Text style={stylesPPS.resultTitle}>Resultado</Text>
          <Text style={stylesPPS.resultText}>
            {
              "Dietoterapia de acordo com quadro clínico e necessidades nutricionais"
            }
          </Text>
        </ScrollView>
      );
    } else if (JSON.stringify(weightLoss) === JSON.stringify("yes")) {
        let strategyDefinitionTitle = "Definir estratégia:"
        let strategyDefinition = "- Aconselhamento nutricional;\n- Fornecimento de lanches intermediários;\n- Enriquecimento das refeições por meio de módulos;\n- Suplementação nutricional industrializada."
      comps.push(
        <ScrollView>
          <Text style={stylesPPS.resultTitle}>Resultado</Text>
          <Text style={stylesPPS.title}>{strategyDefinitionTitle}</Text>
          <Text style={stylesPPS.title}>{strategyDefinition}</Text>
        </ScrollView>
      );
    }
    setfinalResult(comps);
  }, [render2]);

  return (
    <View>
      <Title titleName="TERAPIA NUTRICIONAL ORAL" />
      <Text style={stylesPPS.title}>
        Sistema gastrointestinal íntegro e condições clínicas para se alimentar
        por via oral?
      </Text>
      <Picker
        selectedValue={GITIntact}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setWeightLoss(itemValue)}
      >
        {yesOrNo.map((item, key) => (
          <Picker.Item key={key} label={item.value} value={item.label} />
        ))}
      </Picker>

      <Button
        titleStyle={stylesPPS.baseText}
        buttonStyle={stylesPPS.buttonStyle}
        containerStyle={stylesPPS.containerStyle}
        type="submit"
        onPress={() => {
          {
            setRender(!render);
          }
        }}
      >
        Calcular
      </Button>
      {firstResult}
      {finalResult}
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
    height: scale(30),
    borderRadius: scale(100),
    width: scale(100),
    alignItems: "center",
  },
  baseText: {
    fontSize: scale(15),
    fontWeight: "light",
    color: "#FCFFFF",
    textAlign: "center",
  },
  containerStyle: {
    marginHorizontal: scale(20),
    marginVertical: scale(10),
  },
  resultTitle: {
    alignSelf: "center",
    marginTop: "1%",
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
