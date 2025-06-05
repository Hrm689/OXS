// components/ArtistCard.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

export default function ArtistCard({ artist, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={artist.photo} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.bio} numberOfLines={2}>
          {artist.bio}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#001F3F",
    marginVertical: 6,
    borderRadius: 8,
    padding: 10,
    alignItems: "center"
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    marginLeft: 12
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00BFFF"
  },
  bio: {
    color: "#fff",
    fontSize: 12
  }
});