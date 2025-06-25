import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagePreviewPlaceholder from '@/src/components/atoms/Placeholder'

import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Fotos() {
  const router = useRouter()
  const [imagenes, setImagenes] = useState([null, null, null, null])

  const handleSubirFoto = () => {
    alert('subir foto...')
  }

  const handleContinuar = () => {
    router.push('/(sell)/closeSale')
    const hayImagenes = imagenes.some((img) => img !== null)
    if (!hayImagenes) {
      Alert.alert(
        'atención',
        'por favor subí al menos una imagen antes de continuar'
      )
      return
    }
  }

  return (
    <ContainerView>
      <HeaderMainComponent titulo="Vender" onBackPress={() => router.back()} />

      <View style={styles.container}>
        <Text style={styles.title}>Subí las fotos de tu vehículo</Text>
        <Text style={styles.subtitle}>Podés agregar hasta 4 imágenes</Text>

        {/* área para subir imágenes */}
        <TouchableOpacity style={styles.uploadBox} onPress={handleSubirFoto}>
          <Ionicons name="cloud-upload-outline" size={32} color="#333" />
          <Text style={styles.uploadText}>Subí tus fotos aquí</Text>
          <Text style={styles.formatText}>
            Formatos permitidos: JPG, JPEG, PNG
          </Text>
          <Ionicons
            name="camera-outline"
            size={32}
            color="#333"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>

        {/* vista previa con grilla ordenada */}
        <View style={styles.previewContainer}>
          {imagenes.map((_, i) => (
            <ImagePreviewPlaceholder key={i} />
          ))}
        </View>

        {/* botón reutilizable para continuar */}
        <Button variant="contained" onPress={handleContinuar}>
          Continuar
        </Button>
      </View>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 24,
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
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#aaa',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#f5f0fa',
    width: '85%',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formatText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  previewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '85%',
    rowGap: 16,
  },
})
