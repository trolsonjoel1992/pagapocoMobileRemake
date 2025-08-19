import { AuthProvider } from '@/src/context/AuthContext';
import { LocationProvider } from '@/src/context/LocationContext';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LocationProvider>
          <Stack>
            <Stack.Screen name='splash' options={{ headerShown: false }} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='(home)' options={{ headerShown: false }} />
            <Stack.Screen name='(profile)' options={{ headerShown: false }} />
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
        </LocationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default _layout;
