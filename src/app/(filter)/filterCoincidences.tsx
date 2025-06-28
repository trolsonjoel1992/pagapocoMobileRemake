import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const PublicationComponent = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <View style={styles.publicationContainer}>
      <View style={styles.imageAndInfoContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imagePublicationTouchable}
            onPress={() => router.push('/(publications)/publication1')}
          >
            <Image
              source={ImagesPath.imageDefault}
              style={styles.imagePublication}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* <Image
            source={ImagesPath.imageDefault}
            style={styles.imagePublication}
            resizeMode="contain"
          /> */}

          {/* Botón de favoritos */}
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={16}
              color={isFavorite ? '#A230C7' : '#666'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={{ fontWeight: 'bold' }}>Nombre de publicación</Text>
          <Text style={{ fontWeight: 'bold' }}>AAA...</Text>
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
            <FontAwesome
              name="whatsapp"
              size={moderateScale(20)}
              color="white"
            />
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
      {/* <View>
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
      </View> */}

      {/* body */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />
        <PublicationComponent />

        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.back()}
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* footer */}
      {/* <View style={styles.footer}>
          <View style={styles.buttomVolverContainer}>
            <TouchableOpacity
              style={styles.buttomVolver}
              onPress={() => router.back()} // router.push('/(tabs)/home')
            >
              <Text style={styles.buttomVolverText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View> */}
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
    height: moderateScale(630),
    width: '80%',
    backgroundColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  footer: {
    height: moderateScale(50),
    width: '100%',
    backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
