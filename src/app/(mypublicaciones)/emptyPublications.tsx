import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const EmptyPublications = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchPlaceholder}
          placeholder="Busca tu publicación"
          placeholderTextColor="#A0A0A0"
          onFocus={() => console.log('Input activado')} // Opcional: acción al tocar
        />
        <TouchableOpacity
          onPress={() => {
            // Aquí puedes agregar la acción que quieres que realice al presionar la lupa
            console.log('Botón de búsqueda presionado')
          }}
        >
          <Image
            source={ImagesPath.iconSearchBar}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.emptyContainer}>
        <Image
          source={ImagesPath.imageNopublication}
          style={styles.emptyImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => router.push('/(mypublicaciones)/myPublications')}
        >
          <Text style={styles.emptyTitle}>¡No hay publicaciones!</Text>
        </TouchableOpacity>
        <Text style={styles.emptyText}>
          Podés crear una y empezar a vender cuando quieras.
        </Text>

        {/* Botón "Publicar ahora" */}
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText}>Publicar ahora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: moderateScale(0),
  },
  headerWrapper: {
    paddingHorizontal: 0, // Elimina el padding horizontal
    marginHorizontal: 0, // Elimina el margen horizontal
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(12),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(32),
    marginHorizontal: moderateScale(30),
  },
  searchIcon: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: moderateScale(16),
    color: '#A0A0A0',
    marginLeft: 40,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    paddingBottom: verticalScale(40),
  },
  emptyImage: {
    width: moderateScale(180),
    height: moderateScale(180),
    marginBottom: verticalScale(50),
  },
  emptyTitle: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: verticalScale(25),
    textAlign: 'center',
  },
  emptyText: {
    fontSize: moderateScale(16),
    color: '#666666',
    textAlign: 'center',
    marginBottom: verticalScale(50),
    lineHeight: verticalScale(25),
  },
  publishButton: {
    marginBottom: verticalScale(50),
  },
  publishButtonText: {
    fontSize: moderateScale(16),
    color: 'blue',
    fontWeight: '500',
  },
})

export default EmptyPublications
