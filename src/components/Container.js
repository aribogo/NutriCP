import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { scale } from "../../utils/screenResizing";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';


const Container = (props) => {
  const navigation = useNavigation(); 
  function ShowExamplesByType(examples) {
    if(examples === undefined){
      return(<View></View>)
    }
    return (
      <View style={stylesContainer.contentText}>
        {examples.map((item, key) =>
          item.isInternal === true ? (
            <Button key={key}
            title={item.title}
            onPress={() => {
              navigation.navigate(item.link);
            }}
            ></Button>
          ) : (
            <TouchableOpacity
              key={key}
              onPress={() => {
                download(item.link, "teste.pdf");
              }}
            >
              <Text key={key}>Download {item.title}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    );
  }

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

async function download(link, title) {
  //let fileName = "sample.pdf";
  console.log(FileSystem.documentDirectory + title);
  FileSystem.downloadAsync(link, FileSystem.documentDirectory + title)
    .then(({ uri }) => {
      console.log("Finished downloading to ", uri);
      console.log(FileSystem.documentDirectory + title);
      Sharing.shareAsync(FileSystem.documentDirectory + title);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default Container;
