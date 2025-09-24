import { Stack } from 'expo-router';
import React from 'react';

const MyPublicationsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='editPublication' />
    </Stack>
  );
};

export default MyPublicationsLayout;
