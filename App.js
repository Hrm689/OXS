// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ArtistScreen from './screens/ArtistScreen';
import AlbumScreen from './screens/AlbumScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "O X S",
          headerStyle: { backgroundColor: '#001F3F' },
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#001F3F' },
          tabBarActiveTintColor: '#00BFFF',
          tabBarInactiveTintColor: 'white',
        }}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Artistes" component={ArtistScreen} />
        <Tab.Screen name="Albums à venir" component={AlbumScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import ArtistDetailScreen from './screens/ArtistDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="O X S" component={Tabs} />
        <Stack.Screen name="Détails Artiste" component={ArtistDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator ...> {/* tes onglets ici */} </Tab.Navigator>
  );
}
import UpcomingAlbumsScreen from './screens/UpcomingAlbumsScreen';

// Dans la configuration de la navigation
<Tab.Navigator>
  {/* Autres onglets */}
  <Tab.Screen name="Albums à venir" component={UpcomingAlbumsScreen} />
</Tab.Navigator>
import ClipsScreen from './screens/ClipsScreen';

<Tab.Navigator>
  {/* autres onglets */}
  <Tab.Screen name="Clips" component={ClipsScreen} />
</Tab.Navigator>