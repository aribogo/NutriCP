import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import TransparentButton from "../../components/TransparentButton";
import Explain from "../../components/Explain";

export default function NutriotionalAssessment2Screen(props) {
  return (    
    <View>
      <Title titleName={props.route.params.data.mainTitle} />
      <Explain data={props.route.params.data.subtopics[0].content} />
      <TransparentButton data={props.route.params.data.subtopics.slice(1)} />
    </View>
  );
}