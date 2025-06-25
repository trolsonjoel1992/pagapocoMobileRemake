import Button from '@/src/components/atoms/Button'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImageUploader from '@/src/components/molecules/ImageUploader'

import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text } from 'react-native'

export default function Fotos() {
  const router = useRouter()
  const [imagenes, setImagenes] = useState<string[]>([])

  const handleContinuar = () => {
    const hayImagenes = imagenes.length > 0
    if (!hayImagenes) {
      Alert.alert('atención', 'por favor subí al menos una imagen antes de continuar')
      return
    }
    router.push('/(trabajo_matias)/modal_terminosycondiciones')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.back()}
      />

      <Text style={styles.title}>Subí las fotos de tu vehículo</Text>
      <Text style={styles.subtitle}>Podés agregar hasta 4 imágenes</Text>

      {/* componente de subida de imágenes */}
      <ImageUploader maxImages={4} onChange={setImagenes} />

      {/* botón de continuar reutilizable */}
      <Button variant="contained" onPress={handleContinuar}>
        Continuar
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
})
