import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Footer from "../components/Footer";
import TransparentButton from "../components/TransparentButton";
import Explain from "../components/Explain";

export default function AssessmentInstrumentsScreen(props) {
  return (    
    <View>
      <Title titleName="INSTRUMENTOS DE AVALIAÇÃO" />
      <Explain data={props.route.params.data.explain} />
      <TransparentButton data={props.route.params.data.subtopics} />
      <Footer height="small" />
    </View>
  );
}

