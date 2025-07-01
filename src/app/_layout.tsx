import { AppProvider } from '@/src/contexts/AppContext'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  //return <Slot />;
  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  )
}

export default RootLayout
