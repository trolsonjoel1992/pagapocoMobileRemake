// componente reutilizable para subir imágenes desde galería usando flatlist y manteniendo orden simétrico

import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface ImageUploaderProps {
  maxImages?: number
  onChange: (images: string[]) => void
}

const ImageUploader = ({ maxImages = 8, onChange }: ImageUploaderProps) => {
  const [imagenes, setImagenes] = useState<string[]>([])

  // solicita permisos y selecciona imagen desde galería
  const seleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('permiso denegado', 'necesitamos acceso a tu galería.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    })

    if (!result.canceled && result.assets.length > 0) {
      if (imagenes.length >= maxImages) {
        Alert.alert('límite alcanzado', `solo podés subir hasta ${maxImages} imágenes.`)
        return
      }
      const nuevasImagenes = [...imagenes, result.assets[0].uri]
      setImagenes(nuevasImagenes)
      onChange(nuevasImagenes)
    }
  }

  // elimina imagen por índice
  const eliminarImagen = (index: number) => {
    const nuevas = imagenes.filter((_, i) => i !== index)
    setImagenes(nuevas)
    onChange(nuevas)
  }

  // renderiza cada imagen con su botón de eliminar
  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item }} style={styles.imagePreview} />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => eliminarImagen(index)}
      >
        <Ionicons name="close-circle" size={22} color="#A230C7" />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* encabezado del uploader con iconos alineados a la izquierda */}
      <View style={styles.uploadBox}>
        <View style={styles.iconColumn}>
          <TouchableOpacity onPress={seleccionarImagen}>
            <Image
              source={require('@/src/assets/images/publicationsbuton/icons/loadIcon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={seleccionarImagen}>
            <Image
              source={require('@/src/assets/images/publicationsbuton/icons/cameraIcon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.uploadText}>Subí tus fotos aquí</Text>
          <Text style={styles.formatText}>Archivo JPG, JPEG y PNG</Text>
        </View>
      </View>

      {/* grilla simétrica con flatlist */}
      <FlatList
        data={imagenes}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.rowWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  uploadBox: {
    flexDirection: 'row',
    backgroundColor: '#F1E9F7',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
  },
  iconColumn: {
    justifyContent: 'space-between',
    marginRight: 16,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textColumn: {
    justifyContent: 'center',
    flex: 1,
  },
  uploadText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  formatText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  gridContainer: {
    gap: 16,
    paddingBottom: 12,
  },
  rowWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  imageWrapper: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  deleteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
    elevation: 3,
  },
})

export default ImageUploader
