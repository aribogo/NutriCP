import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Link,
  TouchableOpacity,
} from "react-native";
import { scale } from "../../utils/screenResizing";
import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import base64 from "base64-js";

const Container = (props) => {
  function ShowExamplesByType(examples) {
    return (
      <View>
        {examples.map((item, key) =>
          item.isInternal === true ? (
            <Text key={key}>botão</Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                download();
              }}
              style={{
                height: 50,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 8,
                elevation: 8,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Text>Download {item.title}</Text>
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

async function download() {
  let fileName = "sample.pdf";

  const permissions =
    await StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!permissions.granted) {
    return;
  }

  FileSystem.downloadAsync(
    "http://www.africau.edu/images/default/sample.pdf",
    FileSystem.documentDirectory + fileName
  )
    .then(({ uri }) => {
      console.log("Finished downloading to ", uri);
    })
    .catch((error) => {
      console.error(error);
    });

  const base64Data = await fileToBase64(FileSystem.documentDirectory + fileName);

  try {
    await StorageAccessFramework.createFileAsync(
      permissions.directoryUri,
      fileName,
      "application/pdf"
    )
      .then(async (uri) => {
        await FileSystem.writeAsStringAsync(uri, base64Data, {
          encoding: FileSystem.EncodingType.Base64,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    throw new Error(e);
  }
}

async function fileToBase64(uri) {
  try {
    const content = await FileSystem.readAsStringAsync(uri);
    return base64.fromByteArray(stringToUint8Array(content));
  } catch (e) {
    console.warn("erro: ", e.message);
    return "";
  }
}

function stringToUint8Array(str) {
  const length = str.length;
  const array = new Uint8Array(new ArrayBuffer(length));
  for (let i = 0; i < length; i++) array[i] = str.charCodeAt(i);
  return array;
}

export default Container;
