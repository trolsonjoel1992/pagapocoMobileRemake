import { Slot } from 'expo-router'
import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'

const RootLayout = () => {
  //return <Slot />;
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}

export default RootLayout
