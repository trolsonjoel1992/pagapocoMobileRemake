import ImagesPath from '@/src/constants/ImagesPath'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const EmptyFavorites = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <Image
          source={ImagesPath.noFavorites}
          style={styles.emptyImage}
          resizeMode="contain"
        />
        <Text style={styles.emptyTitle}>
          ¡Todavia no tenes publicaciones favoritas!
        </Text>
        <Text style={styles.emptyText}>
          Agregalas cliqueando en el corazón de la publicación
        </Text>
        <TouchableOpacity
          style={styles.publishButton}
          //onPress={() => router.push()}
        >
          <Text style={styles.publishButtonText}>Nuestros recomendados</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    paddingBottom: verticalScale(40),
  },
  emptyImage: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(50),
    marginTop: moderateScale(50),
  },
  emptyTitle: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: 'black',
    marginBottom: verticalScale(25),
    textAlign: 'center',
  },
  emptyText: {
    fontSize: moderateScale(16),
    color: '#9A9292',
    textAlign: 'center',
    marginBottom: verticalScale(50),
    lineHeight: verticalScale(25),
  },
  publishButton: {
    marginBottom: verticalScale(50),
  },
  publishButtonText: {
    fontSize: moderateScale(20),
    color: '#1A73E9',
    fontWeight: '500',
  },
})

export default EmptyFavorites
