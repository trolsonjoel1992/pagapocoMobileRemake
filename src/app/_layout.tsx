import { Redirect, Stack } from 'expo-router';
import React, { useState } from 'react';

const RootNavigation = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Stack screenOptions={{ headerShown: true }}></Stack>
      {isLogin ? <Redirect href='/(tabs)' /> : <Redirect href='/(auth)' />}
    </>
  );

};

export default RootNavigation;