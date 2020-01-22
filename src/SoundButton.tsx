import React from 'react';
import { Audio } from 'expo-av';
import { Button } from 'react-native';
import { PlaybackSource } from 'expo-av/build/AV';

type Props = {
  source: PlaybackSource
  prompt: string
}

export default function SoundButton({ source, prompt}: Props) {
  const onPress = async () => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(source);
      await sound.playAsync();
    } catch (error) {
      alert('Error playing sound: ' + error);
    }
  }

  return (
    <Button onPress={onPress} title={prompt} />
  );
}
