import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImageUploader from '@/src/components/molecules/ImageUploader'
import { useCreatePublication } from '@/src/contexts/CreatePublicationContext'

import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'

// componente principal para subir fotos del vehiculo
export default function Fotos() {
  const { publicationData, setPublicationData } = useCreatePublication()
  const router = useRouter()

  // estado que almacena las imagenes seleccionadas por el usuario
  const [imagenes, setImagenes] = useState<string[]>([])
  // valida que haya al menos una imagen antes de continuar
  const handleContinuar = () => {
    if (imagenes.length === 0) {
      Alert.alert(
        'atención',
        'por favor subí al menos una imagen antes de continuar'
      )
      return
    }
    // redirige a la pantalla de terminos y condiciones
    setPublicationData({
      ...publicationData,
      images: imagenes,
    })
    router.push('/(sell)/closeSale')
  }

  return (
    <ContainerView>
      {/* encabezado con titulo y boton de retroceso */}
      <HeaderMainComponent titulo="Vender" onBackPress={() => router.back()} />

      {/* flatlist vacia usada para renderizar el contenido con scroll */}
      <FlatList
        data={[]}
        ListHeaderComponent={
          <View style={styles.content}>
            {/* titulo principal */}
            <Text style={styles.title}>Subí las fotos de tu vehículo</Text>

            {/* subtitulo con indicacion de cantidad maxima */}
            <Text style={styles.subtitle}>Podés agregar hasta 8 imágenes</Text>

            {/* componente que permite subir imagenes y las muestra */}
            <ImageUploader maxImages={8} onChange={setImagenes} />

            {/* boton para continuar con el flujo */}
            <View style={styles.buttonContainer}>
              <Button variant="contained" onPress={handleContinuar}>
                Continuar
              </Button>
            </View>
          </View>
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={null}
      />
    </ContainerView>
  )
}

// estilos para la pantalla de carga de imagenes
const styles = StyleSheet.create({
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
