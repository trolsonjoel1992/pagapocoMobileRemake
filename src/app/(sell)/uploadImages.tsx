// archivo: src/app/(trabajo_matias)/fotos.tsx

import Button from '@/src/components/atoms/Button';
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import ImageUploader from '@/src/components/molecules/ImageUploader'; // componente de carga de imágenes

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Fotos() {
  const router = useRouter()
  const [imagenes, setImagenes] = useState<string[]>([])

  // valida si hay imagenes antes de continuar
  const handleContinuar = () => {
    if (imagenes.length === 0) {
      Alert.alert('atención', 'por favor subí al menos una imagen antes de continuar')
      return
    }
    router.push('/(trabajo_matias)/modal_terminosycondiciones')
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent titulo="Vender" onBackPress={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Subí las fotos de tu vehículo</Text>
        <Text style={styles.subtitle}>Podés agregar hasta 8 imágenes</Text>

        {/* componente que permite subir imagenes y las muestra en grilla */}
        <ImageUploader maxImages={8} onChange={setImagenes} />

        {/* boton reutilizable para continuar */}
        <View style={styles.buttonContainer}>
          <Button variant="contained" onPress={handleContinuar}>
            Continuar
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
})
