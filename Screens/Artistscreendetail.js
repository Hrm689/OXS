import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function ArtistDetailScreen({ route }) {
  const { artist } = route.params;
  const [sound, setSound] = useState(null);

  async function playSound(file) {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(file);
    setSound(newSound);
    await newSound.playAsync();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{artist.name}</Text>
      <Text style={styles.bio}>{artist.bio}</Text>

      {artist.albums.map((album, i) => (
        <View key={i} style={styles.album}>
          <Text style={styles.albumTitle}>{album.title}</Text>
          {album.tracks.map((track, j) => (
            <TouchableOpacity key={j} onPress={() => playSound(track.file)}>
              <Text style={styles.track}>{track.title} ▶️</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  name: { fontSize: 24, color: '#001F3F', fontWeight: 'bold' },
  bio: { color: '#555', marginVertical: 10 },
  album: { marginTop: 20 },
  albumTitle: { fontSize: 18, fontWeight: 'bold', color: '#00BFFF' },
  track: { fontSize: 16, marginTop: 5, color: '#001F3F' },
});