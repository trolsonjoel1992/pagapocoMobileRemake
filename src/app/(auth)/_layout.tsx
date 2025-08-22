import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='fullLogin' />
      <Stack.Screen name='register' />
      <Stack.Screen name='google' />
    </Stack>
  );
};

export default AuthLayout;
