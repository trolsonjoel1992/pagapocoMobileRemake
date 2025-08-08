import { Stack } from 'expo-router';
import React from 'react';

const profileLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='setting' />
      <Stack.Screen name='information' />
      <Stack.Screen name='picture' />
      <Stack.Screen name='privacy' />
    </Stack>
  );
};

export default profileLayout;
