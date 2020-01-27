import React from "react";
import { Platform, StyleSheet, ScrollView } from "react-native";
import SoundButton from "./SoundButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SoundBoard() {
  const sounds = [
    { source: require("../assets/sounds/airhorn.wav"), prompt: "Airhorn" },
    {
      source: require("../assets/sounds/record-scratch.wav"),
      prompt: "Record scratch"
    },
    { source: require("../assets/sounds/rimshot.wav"), prompt: "Rimshot" },
    {
      source: require("../assets/sounds/register.wav"),
      prompt: "Cash Register"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {sounds.map(({ source, prompt }) => (
          <SoundButton key={source} source={source} prompt={prompt} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Platform.OS === "web" ? "row" : "column",
    justifyContent: "space-evenly"
  }
});
