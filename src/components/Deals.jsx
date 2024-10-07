import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecommendProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you </Text>
      <Image
        source={RecommendProduct}
        // source={require("../assets/recommend.jpg")}
        style={styles.imgStyle}
      />

      <View style={styles.bottomSections}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,599 ₺</Text>

          <Text style={styles.actualPrice}>1,900 ₺</Text>
        </View>

        <Text style={styles.productName}>
          {" "}
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>

        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c4341",
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
  },
  imgStyle: {
    height: 250,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bottomSections: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    marginRight: 8,
    width: 60,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  offDeal: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  deal: {
    fontWeight: "600",
    color: "#be0201",
    marginLeft: 6,
    fontSize: 15,
  },
  discountPrice: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
    marginVertical: 5,
  },
  actualPrice: {
    marginLeft: 6,
    textDecorationLine: "line-through",
    alignItems: "center",
  },
  productName: {
    color: "#000",
  },
  allDeals: {
    color: "#017185",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 16,
  },
});
