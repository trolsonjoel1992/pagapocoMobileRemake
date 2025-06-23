import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

// componente reutilizable para mostrar una pantalla de estado vacío
// se puede usar cuando no hay datos para mostrar (ej: notificaciones, favoritos, etc)

interface Props {
  imagen: any
  titulo: string
  subtitulo: string
  textoLink: string
  textoBoton: string
  onPressLink?: () => void
  onPressBoton: () => void
}

const EstadoVacio = ({
  imagen,
  titulo,
  subtitulo,
  textoLink,
  textoBoton,
  onPressLink,
  onPressBoton,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={imagen} style={styles.imagen} resizeMode="contain" />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
      <TouchableOpacity onPress={onPressLink}>
        <Text style={styles.link}>{textoLink}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={onPressBoton}>
        <Text style={styles.textoBoton}>{textoBoton}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EstadoVacio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(20),
  },
  imagen: {
    width: moderateScale(260),
    height: moderateScale(260),
    marginBottom: verticalScale(20),
  },
  titulo: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitulo: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: '#888',
    marginVertical: verticalScale(10),
  },
  link: {
    color: '#007BFF',
    fontSize: moderateScale(14),
    textDecorationLine: 'underline',
    marginBottom: verticalScale(20),
  },
  boton: {
    backgroundColor: '#A230C7',
    paddingHorizontal: moderateScale(32),
    paddingVertical: verticalScale(12),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
})
