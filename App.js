import { StatusBar } from "react-native";
import Router from "./src/navigation/Router";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#9ee4d4"
        barStyle="dark-content"
        translucent={true}
      />
      <Router />
    </SafeAreaView>
  );
}
