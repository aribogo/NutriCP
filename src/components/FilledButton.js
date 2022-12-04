import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
//import { Button, Text } from "@rneui/base";
import { scale } from "../../utils/screenResizing";

const FilledButton = (props) => {
  var data = props.data;

  return (
    <Pressable
      style={stylesButton.buttonStyle}
      onPress={() => {
        props.navigation.navigate(props.screen, { data });
      }}
    >
      <Text style={stylesButton.baseText}>{props.buttonName}</Text>
    </Pressable>
  );
};

const stylesButton = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#7EB4B0",
    height: scale(50),
    maxHeight: "100%",
    marginHorizontal: scale(25),
    marginVertical: scale(5),
    paddingLeft: "4%",
    paddingRight: "4%",
    borderRadius: scale(100),
    width: scale(300),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  baseText: {
    fontSize: scale(16),
    fontWeight: "light",
    color: "#FCFFFF",
    textAlign: "center",
    flexShrink: 1,
  },
});

export default FilledButton;
