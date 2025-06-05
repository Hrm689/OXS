// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur ON THE BEAT X STREAM</Text>
      <Text style={styles.subtitle}>© 2023 STUDIO ON THE BEAT LABEL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, color: '#001F3F', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { marginTop: 20, color: '#888' },
});