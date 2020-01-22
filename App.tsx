import React from 'react';
import { StyleSheet, View } from 'react-native';
import SoundButton from './src/SoundButton';

export default function App() {
  const sounds = [
    { source: require('./assets/sounds/airhorn.wav'), prompt: "Airhorn" },
    { source: require('./assets/sounds/record-scratch.wav'), prompt: "Record scratch" },
  ];

  return (
    <View style={styles.container}>
      {sounds.map(({source, prompt}) => 
        <SoundButton key={source} source={source} prompt={prompt} />
      )}
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
