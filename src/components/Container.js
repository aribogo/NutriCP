import { StyleSheet, Text, ScrollView, View, Link } from "react-native";
import { scale } from "../../utils/screenResizing";

const Container = (props) => {

  function ShowExamplesByType(examples) {
    examples.map(() => (example) => 
      <Examples example={example}/>
    );
  };

  const Examples = ({ example }) => {
    return (<View>
      {this.isInternal == true? <Text>botão</Text>: <Text>link</Text> }
      {example.title}
      </View>);
  };

  return (
    <ScrollView
      style={stylesContainer.container}
      contentContainerStyle={{ minHeight: "170%" }}
    >
      <Text style={stylesContainer.contentText}>{props.content}</Text>
      {ShowExamplesByType(props.examples)}
    </ScrollView>
  );
};

const stylesContainer = StyleSheet.create({
  container: {
    borderColor: "#7EB4B0",
    borderWidth: scale(1),
    height: scale(300),
    borderRadius: scale(10),
    width: scale(350),
  },
  contentText: {
    fontSize: scale(17),
    fontWeight: "light",
    color: "#0B3F60",
    textAlign: "justify",
    marginLeft: scale(10),
    marginRight: scale(10),
  },
});

export default Container;
