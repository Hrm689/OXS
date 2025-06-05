import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { artists } from '../data/artists';

export default function ArtistScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Détails Artiste', { artist: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.bio}>{item.bio}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  card: {
    backgroundColor: '#001F3F',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#00BFFF' },
  bio: { color: '#fff', marginTop: 5 },
});
import { Image, Text, View } from 'react-native';

{artist.albums.map((album, index) => (
  <View key={index} style={{ marginVertical: 10 }}>
    <Image
      source={album.cover}
      style={{ width: "100%", height: 200, borderRadius: 10 }}
      resizeMode="cover"
    />
    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>{album.title}</Text>

    {album.tracks.map((track, idx) => (
      <Text key={idx} style={{ marginLeft: 10 }}>🎵 {track.title}</Text>
    ))}
  </View>
))}