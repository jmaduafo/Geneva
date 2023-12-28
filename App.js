import React, { useState, useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import registerNNPushToken from "native-notify";

import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import SearchScreen from "./screens/Search";
import ProfileScreen from "./screens/Profile";

import { Ionicons, FontAwesome } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Erangle': require('./assets/fonts/ErangleRegular-9Yed2.otf'),
    'Satoshi-Light': require('./assets/fonts/Satoshi-Light.otf'),
    'Satoshi-Regular': require('./assets/fonts/Satoshi-Regular.otf'),
    'Satoshi-Medium': require('./assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-Black': require('./assets/fonts/Satoshi-Black.otf'),
  });

  registerNNPushToken(17429, "sw7AKocBIuRWbGJfZ6U9s7");

  // Show Splash Screen while fonts load
  useEffect(function() {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  // Hide Splash Screen when fonts have finished loading
  if (!fontsLoaded) {
    return null
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Saves") {
              return (
                <FontAwesome
                  name={focused ? "heart" : "heart-o"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Create") {
              return <Ionicons name="add-circle" size={50} color={color} />;
            } else if (route.name === "Search") {
              return (
                <Ionicons
                  name={focused ? "md-search" : "search-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Profile") {
              return (
                <FontAwesome
                  name={focused ? "user" : "user-o"}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: "#084335",
          tabBarInactiveTintColor: "#084335",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FEAD8A",
            borderTopColor: "rgba(8, 67, 53, .5)",
            borderTopWidth: 1,
            height: 90,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Saves"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Tab.Screen
          name="Create"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Tab.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEAD8A",
    color: "#084335",
  },
});
