import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';

const onPressButton = async () => {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(require('./assets/sounds/airhorn.wav'));
    await sound.playAsync();
  } catch (error) {
    alert('Error playing sound: ' + error);
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={onPressButton} title="Airhorn" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
