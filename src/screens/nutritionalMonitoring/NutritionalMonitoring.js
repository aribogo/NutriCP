import React,{ useState } from 'react';
import { View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCards';
import nutritionalMonitoring from "../../dto/NutritionalMonitoring";

const IMAGES = {
  image1: require('../../../assets/photos/1.png'),
  image2: require('../../../assets/photos/2.png'),
  image3: require('../../../assets/photos/3.png'),
  image4: require('../../../assets/photos/4.png'),
  image5: require('../../../assets/photos/5.png'),
  image6: require('../../../assets/photos/6.png')
};

const NutritionalMonitoringScreen = () => {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 }
  ]);

  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  )
}


export default NutritionalMonitoringScreen;