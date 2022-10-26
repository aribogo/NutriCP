import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FilledButton from "../components/FilledButton";
import Explain from "../components/Explain";

export default function NutritionalAssessmentScreen(props) {
  return (    
    <View>
      <Title titleName={props.route.params.data.mainTitle} />
      <Explain data={props.route.params.data.explain} />
      <FilledButton
       navigation={props.navigation}
       buttonName={props.route.params.data.mainButtonLabel}
       screen={"AssessmentInstruments"}
       data={props.route.params.data.subtopics}
        />
      <Footer height="small" />
    </View>
  );
}
