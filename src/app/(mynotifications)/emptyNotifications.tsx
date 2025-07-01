// pantalla que muestra un estado vacio cuando no hay notificaciones

import EstadoVacio from '@/src/components/atoms/EstadoVacio'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function NoNotificaciones() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      {/* encabezado sin flecha de retroceso porque ya hay un boton volver visible */}
      <HeaderMainComponent titulo="Notificaciones" />

      {/* componente que muestra el mensaje y botones cuando no hay datos */}
      <EstadoVacio
        imagen={require('@/src/assets/images/Group 325.png')}
        titulo="¡Todavía no tenés ninguna notificación!"
        subtitulo="Volvé más tarde para ver si hay novedades."
        textoBoton="Volver"
        onPressBoton={() => router.push('/(tabs)/home')} // boton volver
        textoLink="Nuestros recomendados"
        onPressLink={() => router.push('/(tabs)/home')} // link opcional
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
