import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 80,
          paddingBottom: 20,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/icon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8E8E93',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/splash-icon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8E8E93',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/adaptive-icon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8E8E93',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/favicon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8E8E93',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/icon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8E8E93',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
