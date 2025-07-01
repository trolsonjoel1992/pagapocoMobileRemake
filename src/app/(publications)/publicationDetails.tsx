import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const PublicationDetails1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Caracteristicas de la publicación"
        onBackPress={() => router.push('/(publications)/publication')} // router.back()
      />

      {/* <View style={styles.header}></View> */}
      <View style={styles.body}>
        <View style={styles.attributes}>
          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Marca</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Modelo</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Año</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Version</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Color</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Tipo de combustible</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Puertas</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Transmisión</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Cilindrada</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Tipo de Carroceria</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: '#F5F5F5' }, styles.item]}>
            <Text style={{ fontWeight: 'bold' }}>Kilometros</Text>
            <Text>----</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>Estado</Text>
            <Text>----</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.push('/(publications)/publication1')}
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: moderateScale(530),
    width: '80%',
    //backgroundColor: "yellow",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: moderateScale(80),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // estilos atributos
  attributes: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(2),
  },
  item: {
    width: '100%',
    //backgroundColor: "#ECE6F0",
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
  },
  // estilos de botones
  buttomVolverContainer: {
    width: moderateScale(290),
    //backgroundColor: "yellow",
  },
  buttomVolver: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomVolverText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
})

export default PublicationDetails1
