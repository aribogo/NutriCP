import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import FilledButton from "../../components/FilledButton";
import Explain from "../../components/Explain";

export default function OralNutritionTerapyScreen(props) {

    const data = "A alimentação por via oral, por ser mais fisiológica, deve ser priorizada, conforme recomenda a American Dietetic Association, desde que o sistema gastrointestinal esteja íntegro, o paciente apresente desejo e possua condições clínicas para se alimentar por essa via. O cuidado nutricional por via oral compreende diversas abordagens, incluindo a orientação nutricional, enriquecimento das refeições, fornecimento de lanches intermediários e de suplementos nutricionais orais.";
  return (    
    <View>
      <Title titleName={"TERAPIA NUTRICIONAL ORAL"} />
      <Explain data={data} />
      <View style={styles.lineBreak}></View>
      <FilledButton
       navigation={props.navigation}
       buttonName={"Indicações e estratégias de uso da TNO"}
       screen={"OralNTQuestionnaire"}
       data={null}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  lineBreak: {
    marginTop: '10%'
  },
  });