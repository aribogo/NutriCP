import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Title from "../../components/Title";
import FilledButton from "../../components/FilledButton";
import Explain from "../../components/Explain";
import Footer from "../../components/Footer";

export default function NutritionalSupportInPalliativeCareScreen(props) {
  let data = props.route.params.data;

  const renderItem = ({ item }) => {

    return (
      <FilledButton
        navigation={props.navigation}
        buttonName={item.label}
        screen={item.link}
        data={null}
      />
    );
  };

  return (
    <View>
      <Title titleName={data.mainTitle} />
      <Explain data={data.explain} />
      <View style={styles.lineBreak}></View>
      <FlatList
        data={props.route.params.data.subtopics}
        renderItem={renderItem}
        keyExtractor={(subtopic) => subtopic.label}
        nestedScrollEnabled
      />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  lineBreak: {
    marginTop: "10%",
  },
});