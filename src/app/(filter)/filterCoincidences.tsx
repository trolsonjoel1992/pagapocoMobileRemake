import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import PFilterComponent from '@/src/components/atoms/PFilterComponent'
import { Color } from '@/src/constants/colors'
import { router } from 'expo-router'
import React from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const filterCoincidences = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <HeaderMainComponent
        titulo="Coincidencias"
        onBackPress={() => router.back()}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <PFilterComponent />
        <PFilterComponent />
        <PFilterComponent />
        <PFilterComponent />
        <PFilterComponent />

        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.back()}
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  publicationContainer: {
    width: '100%',
    height: moderateScale(155),
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    padding: moderateScale(10),
    //paddingBottom: moderateScale(10),
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
    elevation: 5,
    backgroundColor: 'white',
    position: 'relative',
  },
  imagePublication: {
    width: '80%',
    height: '80%',
    borderRadius: moderateScale(10),
  },
  // Nuevo estilo para el botón de favoritos
  favoriteButton: {
    position: 'absolute',
    top: moderateScale(5),
    right: moderateScale(5),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: moderateScale(15),
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
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
    //flexDirection: 'row',
    width: moderateScale(130),
    //backgroundColor: 'yellow',
  },
  buttomVolver: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(10),
  },
  buttomVolverText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    //backgroundColor: 'red',
  },
  scrollContent: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: moderateScale(10),
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilo para el TouchableOpacity de la imagen
  imagePublicationTouchable: {
    width: '80%',
    height: '80%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default filterCoincidences
