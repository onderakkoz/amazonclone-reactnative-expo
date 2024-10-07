import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helpers";
import { ProductData } from "../data/ProductData";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product aside and colour
        </Text>
        {ProductData.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image source={item.image} style={styles.productImage} />
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>

              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>

                <Text style={styles.crossout}>{item.crossOutText}</Text>
              </View>

              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit Cart
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />

              <Text style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  tagline: {
    fontSize: 13,
    color: "gray",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 15,
  },
  productImgSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 12,
    color: "#000",
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: "#017185",
    marginRight: 5,
  },
  star: {},
  ratingCount: {
    fontSize: 12,
    color: "#017185",
  },
  deliveryBy: {},
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 5,
  },
  crossout: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
