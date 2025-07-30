import { router } from 'expo-router'
import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    // Redirige automáticamente a los tabs
    router.replace('/(tabs)/home')
  }, [])

  return null // No necesitamos mostrar nada ya que redirigimos
}

export default Index