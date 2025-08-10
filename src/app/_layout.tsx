import { ThemeProvider } from '@/src/context/ThemeContext';
import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='splash' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(home)' options={{ headerShown: false }} />
        <Stack.Screen name='(profile)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default _layout;
