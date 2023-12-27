import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import SearchScreen from './screens/Search'
import ProfileScreen from './screens/Profile'
import SettingsScreen from './screens/Settings'

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

// const [fontsLoaded] = useFonts({
//   // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
// });

// If the font hasn't loaded, show a splash screen instead of a blank page 
// to symbolize that the app is still loading
// const onLayoutRootView = useCallback(async () => {
//   if (fontsLoaded) {
//     await SplashScreen.hideAsync();
//   }
// }, [fontsLoaded]);


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
