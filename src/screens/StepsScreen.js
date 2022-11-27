import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FilledButton from "../components/FilledButton";
import {
  AssessmentInstrumentInfo,
  NutritionalAssessmentInfo,
  Presentation,
  SymptomManagementInfo,
  BioethicalAspects,
  PalliativeCareInNutricionalSuport,
} from "../../data/jsonParser";

const titleInfo = require("../../data/Steps.json");

export default function StepsScreen({ navigation }) {
  const renderItem = ({ item }) => {
    var jsonData;
    switch (item.id) {
      case "1":
        jsonData = Presentation;
        break;
      case "2":
        jsonData = AssessmentInstrumentInfo;
        break;
      case "3":
        jsonData = NutritionalAssessmentInfo;
        break;
      case "4":
        jsonData = SymptomManagementInfo;
        break;
      case "5":
        jsonData = BioethicalAspects;
        break;
      case "6":
        jsonData = PalliativeCareInNutricionalSuport;
        break;
      case "7":
        jsonData = null;
        break;
      default:
        jsonData = AssessmentInstrumentInfo;
    }

    return (
      <FilledButton
        navigation={navigation}
        buttonName={item.label}
        screen={item.screenName}
        data={jsonData}
      />
    );
  };

  return (
    <View>
      <Title titleName={titleInfo.stepsTitle} />
      <FlatList
        data={titleInfo.buttons}
        renderItem={renderItem}
        keyExtractor={(button) => button.label}
      />
      <Footer height="big" />
    </View>
  );
}
