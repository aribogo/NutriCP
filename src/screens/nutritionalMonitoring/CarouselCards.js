import { View, Text, StyleSheet, Dimensions, Image } from "react-native";


export const SLIDER_WIDTH = Dimensions.get('window').width + 230
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.image}
        style={styles.image}
        accessibilityLabel={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    width: ITEM_WIDTH,
    height: 550,
  }
})

export default CarouselCardItem;