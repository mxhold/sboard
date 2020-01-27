import React from "react";
import SoundBoard from "./src/SoundBoard";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SoundBoard />
    </SafeAreaProvider>
  );
}
