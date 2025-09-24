import { AuthProvider } from '@/src/context/AuthContext';
import { ImageProvider } from '@/src/context/ImageContext';
import { LocationProvider } from '@/src/context/LocationContext';
import { PublicationProvider } from '@/src/context/PublicationContext';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LocationProvider>
          <PublicationProvider>
            <ImageProvider>
              <Stack>
                <Stack.Screen name='splash' options={{ headerShown: false }} />
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen name='(home)' options={{ headerShown: false }} />
                <Stack.Screen name='(sell)' options={{ headerShown: false }} />
                <Stack.Screen
                  name='(profile)'
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='(myPublications)'
                  options={{ headerShown: false }}
                />
                <Stack.Screen name='index' options={{ headerShown: false }} />
              </Stack>
            </ImageProvider>
          </PublicationProvider>
        </LocationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default _layout;
