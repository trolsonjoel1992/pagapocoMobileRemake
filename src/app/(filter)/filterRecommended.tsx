import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import InputFilterComponent from '@/src/components/atoms/InputFilterComponent'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const filterRecommended = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      {/* <View style={styles.header}></View> */}

      {/* Componente del header */}
      <HeaderMainComponent
        titulo="Recomendados"
        onBackPress={() => router.back()}
      />

      {/* body */}
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/src/assets/images/iconRecomendadoFigma.png')}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.textTitle}>Filtrar Recomendados por:</Text>

        <InputFilterComponent
          title="Precio"
          keyboardType="numeric"
          backgroundColor="#f0f0f0"
        />
        <InputFilterComponent title="Marca" keyboardType="default" />
        <InputFilterComponent
          title="Modelo"
          keyboardType="default"
          backgroundColor="#f0f0f0"
        />
        <InputFilterComponent title="Año" keyboardType="numeric" />
        <InputFilterComponent
          title="Color"
          keyboardType="default"
          backgroundColor="#f0f0f0"
        />
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.push('/(filter)/filterCoincidences')}
          >
            <Text style={styles.buttomVolverText}>Aplicar filtro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    //backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: moderateScale(500),
    width: '90%',
    //backgroundColor: 'yellow',
    textAlign: 'right',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  footer: {
    height: moderateScale(150),
    width: '100%',
    //backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'lightgray',
    marginBottom: moderateScale(10),
  },
  imageStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  textTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: moderateScale(10),
  },
  // estilos de botones
  buttomVolverContainer: {
    width: moderateScale(150),
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

export default filterRecommended
