import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Crousel from "../components/Crousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Crousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
{
  /* <StatusBar
        backgroundColor={"#9ee4d4"}
        barStyle="light-content"
        translucent={true}
      /> */
}
