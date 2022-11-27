import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import TransparentButton from "../../components/TransparentButton";
import Explain from "../../components/Explain";

export default function BioethicalPrinciplesScreen(props) {
  return (    
    <View>
      <Title titleName={props.route.params.data.mainTitle} />
      <TransparentButton data={props.route.params.data.subtopics} />
    </View>
  );
}