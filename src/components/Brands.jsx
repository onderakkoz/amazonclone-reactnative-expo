import { Image, StyleSheet, Text, View } from "react-native";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of Day</Text>

        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand1} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand2} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand3} />
            <Text style={styles.brandTitle}>
              Heels - Upto 50% OFF on Heeled Sandals, High Heel
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand4} />
            <Text style={styles.brandTitle}>
              Sony 60W Blutooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  innerContainer: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
    color: "#2c4341",
  },
  row: {
    flexDirection: "row",
  },
  brands: {
    width: "50%",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
  },
  imgStyle: {
    width: "100%",
    height: 150,
    borderRadius: 4,
  },
  brandTitle: {
    color: "#000",
    fontSize: 13,
    marginTop: 5,
    fontWeight: "bold",
  },
});
