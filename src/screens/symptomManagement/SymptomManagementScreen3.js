import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Title from "../../components/Title";
import { scale } from "../../../utils/screenResizing";

export default function SymptomManagementScreen3(props) {

  var data = props.route.params.data;

  return (
    <View>
      <Title titleName={data.title} />
      <ScrollView>
      <Text style={styles.contentText}> {data.text}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
contentText: {
  fontSize: scale(15),
  fontWeight: "light",
  color: "#0B3F60",
  textAlign: "justify",
  flexWrap: 'wrap',
  paddingTop: '4%',
  paddingLeft: '2%',
  paddingRight: '2%',
  lineHeight: '18%',
},
});
