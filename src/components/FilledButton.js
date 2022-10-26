import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import { scale } from "../../utils/screenResizing";

const FilledButton = (props) => {
  var data = props.data;
  return (
    <>
      <Button
        title={props.buttonName}
        titleStyle={stylesButton.baseText}
        buttonStyle={stylesButton.buttonStyle}
        containerStyle={stylesButton.containerStyle}
        onPress={() => {
          props.navigation.navigate(props.screen, { data });
        }}
      />
    </>
  );
};

const stylesButton = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#7EB4B0",
    height: scale(50),
    borderRadius: scale(100),
    width: scale(300),
    alignItems: "center",
  },
  baseText: {
    fontSize: scale(20),
    fontWeight: "light",
    color: "#FCFFFF",
    textAlign: "center",
  },
  containerStyle: {
    marginHorizontal: scale(25),
    marginVertical: scale(5),
  },
});

export default FilledButton;
