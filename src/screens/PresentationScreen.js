import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Explain from "../components/Explain";
import { scale } from "../../utils/screenResizing";

export default function PresentationScreen(props) {
  return (
    <View>
      <View >
        <YoutubePlayer
        style={style.container}
          height={scale(200)}
          play={false}
          videoId={"KB-CioDne20"}
        />
      </View>
      <></>
      <Explain data={props.route.params.data.explain} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1471AB',
    paddingHorizontal: scale(25),
    paddingVertical: scale(30),
  },
});
