import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.imgStyle} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    flexWrap: "wrap",
    fontSize: 13,
    marginBottom: 8,
    color: "#000",
  },
  imgStyle: {
    width: "100%",
    height: 130,
    borderRadius: 5,
  },
});
