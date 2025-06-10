import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.body}>
        <Text style={styles.textTitle}>Mis notificaciones</Text>

        {/* Contenedor de botones */}
        <View style={styles.buttomContainer}>
          {/* Boton Diego */}
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => router.push('/(auth)/(login)/FormLogin')}
          >
            <Text style={styles.buttomText}>Diego</Text>
          </TouchableOpacity>

          {/* Boton Joel */}
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => router.push('/(mypublicaciones)/myPublication')} // cambiar por la ubicacion de su pantalla
          >
            <Text style={styles.buttomText}>Joel</Text>
          </TouchableOpacity>

          {/* Boton Matias */}
          <TouchableOpacity
            style={styles.buttom}
            onPress={() =>
              router.push('/(trabajo_matias)/contacta_con_el_vendedor')
            } // cambiar por la ubicacion de su pantalla
          >
            <Text style={styles.buttomText}>Matias</Text>
          </TouchableOpacity>

          {/* Boton Hugo */}
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => router.push('/(mypublicaciones)/selectPict')} // cambiar por la ubicacion de su pantalla
          >
            <Text style={styles.buttomText}>Hugo</Text>
          </TouchableOpacity>

          {/* Boton Lautaro */}
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => router.push('/(profile)/profile')} // cambiar por la ubicacion de su pantalla
          >
            <Text style={styles.buttomText}>Lautaro</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    //backgroundColor: "aqua",
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingVertical: verticalScale(20),
  },
  header: {
    height: moderateScale(40),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: moderateScale(600),
    width: '90%',
    //backgroundColor: "yellow",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: moderateScale(80),
    width: '100%',
    //backgroundColor: "blue",
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // estilos botones
  buttomContainer: {
    width: '100%', // moderateScale(150)
    height: moderateScale(300),
    //backgroundColor: "red",
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    gap: moderateScale(10),
  },
  buttom: {
    backgroundColor: 'blue',
    width: '50%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    //marginBottom: verticalScale(10),
  },
  buttomText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
})

export default Notification
