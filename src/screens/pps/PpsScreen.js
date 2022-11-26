import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { Button } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import Title from "../../components/Title";
import { PpsDTO } from "../../dto/PpsDTO";
import { scale } from "../../../utils/screenResizing";

const deambulacao = [
  {
    label: "Completa",
    value: "completa",
  },
  {
    label: "Reduzida",
    value: "Reduzida",
  },
  {
    label: "Sentado ou deitado",
    value: "SentadoOudeitado",
  },
  {
    label: "Acamado",
    value: "Acamado",
  },
];

const atividade = [
  {
    label: "Normal, sem evidência de doença",
    value: "normalSemDoenca",
  },
  {
    label: "Normal, alguma evidência de doença",
    value: "normalDoenca",
  },
  {
    label: "Com esforço, alguma evidência de doença",
    value: "esforco",
  },
  {
    label: "Incapaz para o trabalho, alguma evidência de doença",
    value: "incapazTrabalho",
  },
  {
    label: "Incapaz de realizar hobbies, doença significativa",
    value: "incapazHobbie",
  },
  {
    label: "Incapacitado para qualquer trabalho, doença extensa",
    value: "doencaExtensa",
  },
  {
    label: "acamado",
    value: "Acamado",
  },
];

const autocuidado = [
  {
    label: "Completo",
    value: "completo",
  },
  {
    label: "Assistência ocasional",
    value: "assistenciaOcasional",
  },
  {
    label: "Assistência Considerável",
    value: "assistenciaConsideravel",
  },
  {
    label: "Assistência quase completa",
    value: "assistenciaQuaseCompleta",
  },

  {
    label: "Dependência quase completa",
    value: "dependencia",
  },
  {
    label: "acamado",
    value: "Acamado",
  },
];

const ingestao = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Normal ou reduzida",
    value: "normalOuReduzida",
  },
  {
    label: "Reduzida",
    value: "reduzida",
  },
  {
    label: "Ingestão limitada a colheradas",
    value: "ingestaoLimitada",
  },
  {
    label: "Cuidados com a boca",
    value: "cuidadosBoca",
  },
];

const consciencia = [
  {
    label: "Completo",
    value: "completo",
  },
  {
    label: "Completo ou com períodos de confusão",
    value: "completoOuConfusao",
  },
  {
    label: "Confuso ou em coma",
    value: "confuso",
  },
];

var resultPPS = new Map([
  [
    new PpsDTO("Completa", "normalSemDoenca", "Completo", "normal", "completo"),
    100,
  ],
  [
    new PpsDTO("Completa", "normalDoenca", "Completo", "normal", "completo"),
    90,
  ],
  [new PpsDTO("Completa", "esforco", "Completo", "normal", "completo"), 80],
  [
    new PpsDTO(
      "Reduzida",
      "incapazTrabalho",
      "Completo",
      "normalOuReduzida",
      "completo"
    ),
    70,
  ],
  [
    new PpsDTO(
      "Reduzida",
      "incapazHobbie",
      "assistenciaOcasional",
      "normalOuReduzida",
      "completoOuConfusao"
    ),
    60,
  ],
  [
    new PpsDTO(
      "SentadoOudeitado",
      "doencaExtensa",
      "assistenciaConsideravel",
      "normalOuReduzida",
      "completoOuConfusao"
    ),
    50,
  ],
  [
    new PpsDTO(
      "Acamado",
      "Acamado",
      "assistenciaQuaseCompleta",
      "normalOuReduzida",
      "completoOuConfusao"
    ),
    40,
  ],
  [
    new PpsDTO(
      "Acamado",
      "Acamado",
      "dependencia",
      "reduzida",
      "completoOuConfusao"
    ),
    30,
  ],
  [
    new PpsDTO(
      "Acamado",
      "Acamado",
      "Acamado",
      "ingestaoLimitada",
      "completoOuConfusao"
    ),
    20,
  ],
  [new PpsDTO("Acamado", "Acamado", "Acamado", "cuidadosBoca", "confuso"), 10],
]);

export default function PpsScreen() {
  const [deambulacaoValue, setDeambulacao] = useState("completa");
  const [atividadeValue, setAtividade] = useState("normalSemDoenca");
  const [autocuidadoValue, setAutocuidado] = useState("completo");
  const [ingestaoValue, setIngestao] = useState("normal");
  const [conscienciaValue, setconsciencia] = useState("completo");
  const [isEnabled, setEnabled] = useState(true);
  const [ppsDTO, setPPSDTO] = useState();
  const [render, setRender] = useState(false);

  function onRender() {
    const comps = [];

    if (render === true) {
      if (isEnabled === false) {
        comps.push(
          <ScrollView>
            <Text key={value} style={stylesPPS.resultText}> 0% - Morte </Text>
          </ScrollView>
        );
        setRender(false);
        return comps;
      }

      setPPSDTO(
        new PpsDTO(
          deambulacaoValue,
          atividadeValue,
          autocuidadoValue,
          ingestaoValue,
          conscienciaValue
        )
      );
      resultPPS.forEach((value, key) => {
        if (JSON.stringify(key) === JSON.stringify(ppsDTO)) {
          comps.push(
            <ScrollView>
              <Text key={value} style={stylesPPS.resultText}> {value}% </Text>
            </ScrollView>
          );
          setRender(false);
        }
      });
    }

    return comps;
  }

  return (
    <View>
      <Title titleName="ESCALA PALLIATIVE PERFOMANCE SCALE (PPS)" />
      <ScrollView>
      <Text style={stylesPPS.title}>Morte: </Text>
      <CheckBox
        onAnimationType="bounce"
        value={!isEnabled}
        onValueChange={(newValue) => setEnabled(!newValue)}
        style={stylesPPS.checkBox}
        tintColors={{ true: "#0B3F60", false: "white" }}
      />
      <Text style={stylesPPS.title}>Deambulação:</Text>
      <Picker
        selectedValue={deambulacaoValue}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setDeambulacao(itemValue)}
        enabled={isEnabled}
      >
        {deambulacao.map((item, key) => (
          <Picker.Item key={key} label={item.label} value={item.value} />
        ))}
      </Picker>

      <Text style={stylesPPS.title}>Atividade e evidência de doença:</Text>
      <Picker
        selectedValue={atividadeValue}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setAtividade(itemValue)}
        enabled={isEnabled}
      >
        {atividade.map((item, key) => (
          <Picker.Item key={key} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Text style={stylesPPS.title}>Autocuidado:</Text>
      <Picker
        selectedValue={autocuidadoValue}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setAutocuidado(itemValue)}
        enabled={isEnabled}
      >
        {autocuidado.map((item, key) => (
          <Picker.Item key={key} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Text style={stylesPPS.title}>Ingestão:</Text>
      <Picker
        selectedValue={ingestaoValue}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setIngestao(itemValue)}
        enabled={isEnabled}
      >
        {ingestao.map((item, key) => (
          <Picker.Item key={key} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Text style={stylesPPS.title}>Nível de consciência:</Text>
      <Picker
        selectedValue={conscienciaValue}
        style={stylesPPS.picker}
        itemStyle={stylesPPS.pickerText}
        onValueChange={(itemValue, itemIndex) => setconsciencia(itemValue)}
        enabled={isEnabled}
      >
        {consciencia.map((item, key) => (
          <Picker.Item key={key} label={item.label} value={item.value} />
        ))}
      </Picker>
      </ScrollView>
      <Button
        titleStyle={stylesPPS.baseText}
        buttonStyle={stylesPPS.buttonStyle}
        containerStyle={stylesPPS.containerStyle}
        type="submit"
        onPress={() => {
          setRender(!render);
        }}
      >
        Calcular
      </Button>
      {onRender()}
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
  checkBox: {
    color: "#0B3F60",
    width: scale(30),
    borderRadius: scale(10),
    marginLeft: scale(10),
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
