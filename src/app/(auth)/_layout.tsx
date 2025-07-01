import { Color } from '@/src/constants/colors'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'

const AuthLayout = () => {
  return (
    <>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />

      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}

export default AuthLayout
