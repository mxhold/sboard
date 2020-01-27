import React from "react";
import { Platform, StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container: React.FC<{}> = ({ children }) => {
  if (Platform.OS === "web") {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: Platform.OS === "web" ? "row" : "column"
  }
});
