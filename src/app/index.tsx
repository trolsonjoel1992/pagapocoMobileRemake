import { Redirect } from 'expo-router'
import React from 'react'

export default function Index() {
  // const { user, isLoading } = useAuth()

  // // Si está cargando, muestra un indicador
  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }

  // Redirige a splash
  // Pero ahora con conocimiento del estado de autenticación
  return <Redirect href="/splash" /> // href="/splash" // href="/(filter)/filterCoincidences"
}
