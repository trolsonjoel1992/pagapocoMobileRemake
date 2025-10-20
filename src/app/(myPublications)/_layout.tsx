import { Stack } from 'expo-router';
import React from 'react';

const MyPublicationsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='editPublication' />
      <Stack.Screen name='upgradePrem' />
      <Stack.Screen name='myPublication' />
      <Stack.Screen name='editCategory' />
      <Stack.Screen name='editImages' />
    </Stack>
  );
};

export default MyPublicationsLayout;
