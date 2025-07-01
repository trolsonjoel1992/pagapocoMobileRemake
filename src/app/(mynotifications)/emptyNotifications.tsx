// pantalla que muestra un estado vacío cuando no hay notificaciones

import EstadoVacio from '@/src/components/atoms/EstadoVacio';
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function NoNotificaciones() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      {/* encabezado con botón de retroceso */}
      <HeaderMainComponent
        titulo="Notificaciones"
        onBackPress={() => router.back()}
      />

      {/* componente que muestra mensaje e imagen cuando no hay notificaciones */}
      <EstadoVacio
        imagen={require('@/src/assets/images/Group 325.png')}
        titulo="¡Todavía no tenés ninguna notificación!"
        subtitulo="Volvé más tarde para ver si hay novedades."
        textoBoton="Volver"
        onBotonPress={() => router.push('/(tabs)/home')}
        textoLink="Nuestros recomendados"
        onLinkPress={() => router.push('/(tabs)/home')}
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



