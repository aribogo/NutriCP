import { StyleSheet, Text, ScrollView } from "react-native";
import { scale } from "../../utils/screenResizing";

const Explain = (props) => {
  console.log(props)
  return (
    <ScrollView 
    style={styles.explain}
      contentContainerStyle={{ minHeight: "30%" }}
    >
      <Text style={styles.contentText}>{props.data}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    explain: {
      position: "relative",
      top: scale(20),  
      marginLeft: scale(15),
      marginRight: scale(15)
    },
  contentText: {
    fontSize: scale(17),
    fontWeight: "light",
    color: "#0B3F60",
    textAlign: "justify",
    flexWrap: 'wrap'
  },
});

export default Explain;
