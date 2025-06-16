import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const PublicationComponent = () => {
  return (
    <View style={styles.publicationContainer}>
      <View style={styles.imageAndInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={ImagesPath.imageDefault}
            style={styles.imagePublication}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text>Nombre de publicación</Text>
          <Text>AAA...</Text>
          <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold' }}>
            $000.000
          </Text>
        </View>
      </View>

      <View style={styles.buttomPublicationContainer}>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            //onPress={() => router.back()} // llevar a la pantalla del resultado del filtro
          >
            <Text style={styles.buttomVolverText}>Preguntar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            //onPress={() => router.back()} // llevar a la pantalla del resultado del filtro
          >
            <Text style={styles.buttomVolverText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const filterCoincidences = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      {/* <View style={styles.header}></View> */}

      <HeaderMainComponent
        titulo="Coincidencias"
        onBackPress={() => router.back()}
      />

      {/* body */}
      <View style={styles.body}>
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.back()} // router.push('/(tabs)/home')
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
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
    height: moderateScale(620),
    width: '80%',
    //backgroundColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: moderateScale(60),
    width: '100%',
    //backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  publicationContainer: {
    width: '100%',
    height: moderateScale(145),
    //backgroundColor: 'red',
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    padding: moderateScale(10),
  },
  imageAndInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'green',
    width: '100%',
    height: moderateScale(80),
    gap: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  imageContainer: {
    width: moderateScale(110),
    height: moderateScale(80),
    //backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    //elevation: 5,
  },
  imagePublication: {
    width: '80%',
    height: '80%',
    borderRadius: moderateScale(10),
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    //backgroundColor: 'aqua',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  buttomPublicationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginTop: moderateScale(10),
    //backgroundColor: 'blue',
  },
  // estilos de botones
  buttomVolverContainer: {
    width: moderateScale(130),
    //backgroundColor: 'yellow',
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

export default filterCoincidences
