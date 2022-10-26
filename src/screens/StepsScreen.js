import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FilledButton from "../components/FilledButton";
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";
import TransparentButton from "../components/TransparentButton";
import { AssessmentInstrumentInfo } from "../../data/choncho";

const titleInfo = require("../../data/Steps.json");

const styles = StyleSheet.create({});

export default function StepsScreen({ navigation }) {

  const [selectedId, setSelectedId] = useState("0");

  const renderItem = ({ item }) => {
    var tela;
    switch (item.id) {
      case "1":
        tela = AssessmentInstrumentInfo;
        break;
      case "2":
        tela = AssessmentInstrumentInfo;
        break;
      default:
        tela = AssessmentInstrumentInfo;
    }

    return (
      
      <TouchableOpacity 
      onPress ={() => {
        if (item.label === selectedId) {
          console.log(selectedId)
          setSelectedId("0");
        } else {
          setSelectedId(item.label);
          console.log("AQUI");
          console.log(selectedId)
        }
        
      }}>
      <FilledButton
        navigation={navigation}
        buttonName={item.label}
        screen={item.screenName}
        data={tela}
      />
      </TouchableOpacity>
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
