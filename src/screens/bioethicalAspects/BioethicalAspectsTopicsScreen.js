import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Title from "../../components/Title";
import Explain from "../../components/Explain";

export default function BioethicalAspectsTopicsScreen(props) {
  let data = props.route.params.data

  const RenderItem = () => {
    if(props.route.params.data.mainButtonLabel !== undefined ||
        props.route.params.data.mainButtonLabel !== null)
    return (
      <Text>DOWNLOAD VAI VIR AQUI</Text>
    );
  };

  return (    
    <View>
      <Title titleName={data.mainTitle} />
      <Explain data={data.explain} />
      <View style={styles.lineBreak}></View>
      <RenderItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  lineBreak: {
    marginTop: '10%'
  },
  });
