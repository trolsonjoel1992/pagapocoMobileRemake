// componente para seleccionar y subir imágenes desde la galería

import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

// propiedades del componente de cantidad máxima de imágenes y callback al cambiar
interface ImageUploaderProps {
  maxImages?: number
  onChange: (images: string[]) => void
}

const ImageUploader = ({ maxImages = 4, onChange }: ImageUploaderProps) => {
  const [imagenes, setImagenes] = useState<string[]>([])
  const { width } = useWindowDimensions()

  // solicita permisos y abre la galería para seleccionar una imagen
  const seleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso a tu galería.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    })

    // si se selecciona una imagen y no se supera el límite, se agrega a la lista
    if (!result.canceled && result.assets.length > 0) {
      if (imagenes.length >= maxImages) {
        Alert.alert('Límite alcanzado', `Sólo podés subir hasta ${maxImages} imágenes.`)
        return
      }

      const nuevasImagenes = [...imagenes, result.assets[0].uri]
      setImagenes(nuevasImagenes)
      onChange(nuevasImagenes)
    }
  }

  // elimina una imagen de la lista según su índice
  const eliminarImagen = (index: number) => {
    const nuevasImagenes = imagenes.filter((_, i) => i !== index)
    setImagenes(nuevasImagenes)
    onChange(nuevasImagenes)
  }

  return (
    <View style={styles.container}>
      {/* botón para subir imagen */}
      <TouchableOpacity style={styles.uploadBox} onPress={seleccionarImagen}>
        <Ionicons name="cloud-upload-outline" size={32} color="#333" />
        <Text style={styles.uploadText}>Subí tus fotos aquí</Text>
        <Text style={styles.formatText}>Formatos permitidos: JPG, JPEG, PNG</Text>
        <Ionicons name="camera-outline" size={32} color="#333" style={{ marginTop: 10 }} />
      </TouchableOpacity>

      {/* grilla de imágenes seleccionadas */}
      <View style={styles.gridContainer}>
        {imagenes.map((uri, i) => (
          <View key={i} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.imagePreview} />
            <TouchableOpacity style={styles.deleteButton} onPress={() => eliminarImagen(i)}>
              <Ionicons name="close-circle" size={22} color="#A230C7" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

// estilos del componente
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#aaa',
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f0fa',
    marginBottom: verticalScale(24),
    width: '100%',
  },
  uploadText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginTop: 10,
  },
  formatText: {
    fontSize: moderateScale(13),
    color: '#555',
    marginTop: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: verticalScale(16),
    width: '100%',
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
    borderRadius: 12,
  },
  deleteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
    elevation: 2,
  },
})

export default ImageUploader

