import { StyleSheet, Text, ScrollView, View, Link, TouchableOpacity } from "react-native";
import { scale } from "../../utils/screenResizing";
import { Constants, FileSystem } from 'expo';
import RNFS from 'react-native-fs';


const Container = (props) => {

  function ShowExamplesByType(examples) {
    return (
      <View>
        {examples.map((item, key) => (
          item.isInternal === true ? <Text  key={key}>botão</Text> : 
          
          <TouchableOpacity onPress={() => {
            download();
           }}
           style={{
             height:(50),
             shadowOffset: {width: 0, height: 0},
             shadowOpacity: 1,
             shadowRadius:(8),
             elevation:(8),
             borderRadius:(25),
             alignItems: 'center',
             justifyContent: 'space-between',
             flexDirection: 'row',
             paddingLeft:(20),
             paddingRight:(20),
           }}>
           <Text
            >
           Download {item.title}
      </Text>
</TouchableOpacity>
          
        ))}
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

async function download() {
  let documentDir = RNFS.DocumentDirectoryPath;
  console.log("AQUI " + documentDir);

  FileSystem.downloadAsync(
    'http://www.africau.edu/images/default/sample.pdf',
    documentDir + 'sample.pdf'
  )
    .then(({ uri }) => {
      console.log('Finished downloading to ', uri);
    })
    .catch(error => {
      console.error(error);
    });
}


export default Container;
