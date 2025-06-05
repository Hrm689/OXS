// screens/UpcomingAlbumsScreen.js

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { upcomingAlbums } from '../data/upcomingAlbums';

const UpcomingAlbumsScreen = () => {
  const renderAlbum = ({ item }) => (
    <View style={styles.albumContainer}>
      <Image source={item.cover} style={styles.coverImage} />
      <Text style={styles.albumTitle}>{item.title}</Text>
      <Text style={styles.artistName}>{item.artist}</Text>
      <Text style={styles.releaseDate}>Sortie prévue : {item.releaseDate}</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Suivre</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={upcomingAlbums}
        renderItem={renderAlbum}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default UpcomingAlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  albumContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  coverImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  artistName: {
    fontSize: 16,
    color: '#555',
  },
  releaseDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  followButton: {
    marginTop: 8,
    backgroundColor: '#001F3F',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});