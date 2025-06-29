import { useApp } from '@/src/contexts/AppContext'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const PublicationCardComponent = ({ item }) => {
  const { toggleFavorite, isFavorite } = useApp()

  return (
    <TouchableOpacity
      style={styles.publicationCard}
      onPress={() => router.push('/(publications)/publication1')}
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.images[0]}
          style={styles.publicationImage}
          resizeMode="contain"
        />
        {/* Botón de favoritos */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(item.id)}
        >
          <AntDesign
            name={isFavorite(item.id) ? 'heart' : 'hearto'}
            size={16}
            color={isFavorite(item.id) ? '#A230C7' : '#666'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.publicationInfo}>
        <Text style={styles.publicationTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.publicationPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  publicationCard: {
    width: '48%',
    backgroundColor: 'white', // #F5F5F5
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //elevation: 5,
    //marginBottom: verticalScale(12),
  },
  publicationImage: {
    width: '100%',
    height: verticalScale(100), // 120
    backgroundColor: 'white', // #F5F5F5
    //borderRadius: moderateScale(12),
  },
  publicationInfo: {
    padding: moderateScale(10),
  },
  publicationTitle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    //marginBottom: verticalScale(4),
  },
  publicationPrice: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    //color: '#A230C7',
    //marginBottom: verticalScale(4),
  },
  publicationLocation: {
    fontSize: moderateScale(12),
    color: '#666',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: verticalScale(110), // 120
    backgroundColor: 'white', // #F5F5F5
    justifyContent: 'center',
    alignItems: 'center',
    //gap: moderateScale(10),
  },
  favoriteButton: {
    position: 'absolute',
    top: moderateScale(9),
    right: moderateScale(4),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //backgroundColor: 'red',
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
})

export default PublicationCardComponent
