import { Redirect } from 'expo-router';
import React from 'react';

export default function Home() {
  // Redirigir directamente a la página principal sin autenticación
  //return <Redirect href="(tabs)/home" />;

  // Redirigir a la pantalla splash primero
  return <Redirect href="/splash" />;

}