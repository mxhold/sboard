import React from "react";
import SoundButton from "./SoundButton";
import Container from "./Container";

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
    <Container>
      {sounds.map(({ source, prompt }) => (
        <SoundButton key={source} source={source} prompt={prompt} />
      ))}
    </Container>
  );
}
