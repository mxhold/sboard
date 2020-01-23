import React, { useState } from "react";
import { Audio } from "expo-av";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { PlaybackSource } from "expo-av/build/AV";

type Props = {
  source: PlaybackSource;
  prompt: string;
};

export default function SoundButton({ source, prompt }: Props) {
  const [isDepressed, setIsDepressed] = useState(false);

  const onPress = async () => {
    const sound = new Audio.Sound();
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      await sound.loadAsync(source);
      await sound.playAsync();
    } catch (error) {
      alert("Error playing sound: " + error);
    }
  };

  let imageSource;
  if (isDepressed) {
    imageSource = require("../assets/button-pressed.png");
  } else {
    imageSource = require("../assets/button.png");
  }

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setIsDepressed(true)}
      onPressOut={() => setIsDepressed(false)}
    >
      <View style={styles.container}>
        <Image style={styles.button} source={imageSource} />
        <Text style={styles.prompt}>{prompt}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  prompt: {
    position: "absolute",
    color: "#fff",
    fontSize: 20
  },
  button: {
    height: 175,
    width: 175
  }
});
