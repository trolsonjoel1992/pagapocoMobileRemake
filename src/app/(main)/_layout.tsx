import { Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Text>MainLayout</Text>
    </Stack>
  )
}

export default MainLayout