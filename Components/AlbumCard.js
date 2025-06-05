// components/AlbumCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AlbumCard({ album }) {
  return (
    <View style={styles.card}>
      <Image source={album.cover} style={styles.cover} />
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.artist}>{album.artist}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginVertical: 10
  },
  cover: {
    width: 180,
    height: 180,
    borderRadius: 10
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold"
  },
  artist: {
    fontSize: 14,
    color: "#555"
  }
});