// componente que muestra un placeholder de imagen vacía

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ImagePreviewPlaceholder = () => {
  return (
    <View style={styles.box}>
      <Ionicons name="image-outline" size={60} color="#333" />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
  width: '48%',
  aspectRatio: 1,
  borderRadius: 10,
  backgroundColor: '#f2ecf8',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 16,
}

})

export default ImagePreviewPlaceholder
