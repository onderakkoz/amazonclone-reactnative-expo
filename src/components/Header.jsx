import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
const { width, height } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      >
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <FontAwesome name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={"#848484"}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>

        <Feather
          name="mic"
          size={22}
          color="black"
          style={{ marginRight: 10 }}
        />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: height * 0.09,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputBox: {
    paddingVertical: 5,
    flexDirection: "row",
    height: 35,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: width * 0.8,
    height: height * 0.05,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#a1bcc0",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
  },
});
