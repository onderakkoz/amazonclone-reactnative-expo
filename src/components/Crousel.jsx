import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Crousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        showsButtons={false}
        autoplay={true}
        style={styles.wrapper}
      >
        {CarouselData.map((item) => (
          <View key={item.id}>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Crousel;

const styles = StyleSheet.create({
  carouselContainer: {
    // position: "relative",
  },
  wrapper: {
    height: 300,
  },
  imgStyle: {
    width: "100%",
    height: 250,
  },
});
