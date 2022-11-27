import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import FilledButton from "../../components/FilledButton";
import Explain from "../../components/Explain";
import {
  BioethicalPrinciples,
  TerminalAspectsConsidered,
  AdvanceDirectivesOfWill,
  DecisionCapacityAssessment
} from "../../../data/jsonParser";

export default function BioethicalAspectsScreen(props) {
  let data = props.route.params.data;

  const renderItem = ({ item }) => {
    var jsonData;
    switch (item.id) {
      case 1:
        jsonData = BioethicalPrinciples;
        break;
      case 2:
        jsonData = TerminalAspectsConsidered;
        break;
      case 3:
        jsonData = DecisionCapacityAssessment;
        break;
      case 4:
        jsonData = AdvanceDirectivesOfWill;
        break;
      default:
        jsonData = AdvanceDirectivesOfWill;
    }

    return (
      <FilledButton
        navigation={props.navigation}
        buttonName={item.title}
        screen={item.link}
        data={jsonData}
      />
    );
  };

  return (
    <View>
      <Title titleName={data.mainTitle} />
      <Explain data={data.explain} />
      <View style={styles.lineBreak}></View>
      <FlatList
        data={props.route.params.data.subtopics[0].examples}
        renderItem={renderItem}
        keyExtractor={(example) => example.title}
        nestedScrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lineBreak: {
    marginTop: "10%",
  },
});
