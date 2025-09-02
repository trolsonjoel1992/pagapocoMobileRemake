import { Stack } from 'expo-router';
import React from 'react';

const SellLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='sellForm' />
      <Stack.Screen name='salePlan' />
      <Stack.Screen name='sellImages' />
      <Stack.Screen name='sellTitle' />
    </Stack>
  );
};

export default SellLayout;
