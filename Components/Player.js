// components/Player.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function Player({ file, title }) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function togglePlayback() {
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync(file);
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
    } else if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={togglePlayback}>
        <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
      <Text style={styles.trackTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4
  },
  button: {
    backgroundColor: "#001F3F",
    padding: 6,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff"
  },
  trackTitle: {
    marginLeft: 10,
    fontSize: 14,
    color: "#001F3F"
  }
});