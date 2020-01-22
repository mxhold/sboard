import React from 'react';
import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import SoundButton from './src/SoundButton';

export default function App() {
  const sounds = [
    { source: require('./assets/sounds/airhorn.wav'), prompt: "Airhorn" },
    { source: require('./assets/sounds/record-scratch.wav'), prompt: "Record scratch" },
    { source: require('./assets/sounds/rimshot.wav'), prompt: "Rimshot" },
    { source: require('./assets/sounds/register.wav'), prompt: "Cash Register" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {sounds.map(({source, prompt}) =>
        <SoundButton key={source} source={source} prompt={prompt} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: Platform.OS === 'web' ? 'row' : 'column'
   },
});
