import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

const SubHeader = () => {
  return (
    <LinearGradient
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Feather name="map-pin" size={20} color="black" />
      <Text style={styles.deliver}>Deliver to Turkey - Çorum (ev) </Text>
      <Entypo name="chevron-down" size={20} color="#2c4341" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  deliver: {
    fontSize: 13,
    paddingHorizontal: 6,
    color: "#2c4341",
    fontWeight: "bold",
  },
});

export default SubHeader;
