import React from "react";
import { View, FlatList } from "react-native";
import Title from "../../components/Title";
import FilledButton from "../../components/FilledButton";
import Explain from "../../components/Explain";

export default function SymptomManagementScreen2(props) {

  const renderItem = ({ item }) => {
    return (
      <FilledButton
        navigation={props.navigation}
        buttonName={item.title}
        screen={item.link}
        data={item}
      />
    );
  };

  return (
    <View>
      <Title titleName={props.route.params.data.mainTitle} />
      <Explain data={props.route.params.data.subtopics[0].content} />
    
      <FlatList
        data={props.route.params.data.subtopics[0].examples}
        renderItem={renderItem}
        keyExtractor={(example) => example.title}
        nestedScrollEnabled
      />
    
    </View>
  );
}
