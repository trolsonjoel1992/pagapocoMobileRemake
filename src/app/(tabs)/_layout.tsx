import { View, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true, tabBarActiveTintColor: 'grey', tabBarInactiveTintColor: 'light'}}>
      <Tabs.Screen name="index" options={{ 
        title: 'Inicio',
        tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }} />
      <Tabs.Screen name="stats" options={{ 
        title: 'Publicaciones',
        tabBarIcon: ({ color, size }) => <MaterialIcons name="article" color={color} size={size} />,
        }} />
      <Tabs.Screen name="store" options={{ 
        title: 'Vender',
        tabBarIcon: ({ color, size }) => <MaterialIcons name="sell" color={color} size={size} />,
        }} />
      <Tabs.Screen name="favorites" options={{ 
        title: 'Favoritos',
        tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite" color={color} size={size} />,
        }} />
      <Tabs.Screen name="profile" options={{ 
        title: 'Perfil',
        tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
        }} />
    </Tabs>
  )
}

export default _layout;