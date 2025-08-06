import { Stack } from 'expo-router';
import React from 'react';

const profileLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='setting' />
    </Stack>
  );
};

export default profileLayout;
