import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='homeCategory' />
      <Stack.Screen name='details' />
    </Stack>
  );
};

export default HomeLayout;
