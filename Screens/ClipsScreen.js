// screens/ClipsScreen.js

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { clips } from '../data/clips';

const ClipsScreen = () => {
  const renderClip = ({ item }) => (
    <View style={styles.clipContainer}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.artist}>{item.artist}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(item.videoUrl)}
      >
        <Text style={styles.buttonText}>Regarder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={clips}
        renderItem={renderClip}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default ClipsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  clipContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  thumbnail: {
    width: 280,
    height: 160,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  artist: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  }
});