import React, { ReactElement, useState, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Icon } from "@rneui/base";
import { scale } from "../../utils/screenResizing";
import Container from "./Container";

const TransparentButton = (props) => {

  console.log(props.data);

  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[stylesButton.button]}>
      <Text style={stylesButton.buttonText}>{item.label}</Text>
      <Icon type="font-awesome" name="chevron-down" style={stylesButton.icon} />
    </TouchableOpacity>
  );

  const renderDropdown = (item) => {
    if (item.label == selectedId) {
      return <Container content={item.content}  examples={item.examples} />;
    }
  };


  const renderItem = ({ item }) => {
    return (
      <View>
      <Item
        item={item}
        onPress={() => {
          if (item.label === selectedId) {
            setSelectedId("0");
          } else {
            setSelectedId(item.label);
          }
        }}
      />
      {renderDropdown(item)}
      </View>
    );
  };


  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
        extraData={selectedId}
      />
      <Text>{props.label}</Text>
    </SafeAreaView>
  );
};

const stylesButton = StyleSheet.create({
  button: {
    borderColor: "#7EB4B0",
    borderWidth: scale(1),
    height: scale(50),
    borderRadius: scale(10),
    width: scale(350),
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    fontSize: scale(15),
    fontWeight: "light",
    color: "#7EB4B0",
    textAlign: "center",
  },
  contentText: {
    position: "absolute",
    fontSize: scale(17),
    fontWeight: "light",
    color: "#0B3F60",
    textAlign: "justify",
  },
  icon: {
    color: "#7EB4B0",
    width: scale(20),
    alignSelf: "flex-start",
  },
});

export default TransparentButton;
