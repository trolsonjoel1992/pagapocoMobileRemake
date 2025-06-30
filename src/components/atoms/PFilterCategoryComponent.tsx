import ImagesPath from '@/src/constants/ImagesPath'
import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

type FilterProps = {
  imagePublication?: any
  title?: string
  description?: string
  price?: string
  recommended?: boolean
  onPressFunction?: () => void
}

const PFilterCategoryComponent = ({
  imagePublication = ImagesPath.imageDefault2,
  title = 'Nombre publicación',
  description = 'AAA...',
  price = '000.000',
  recommended = false,
  onPressFunction,
}: FilterProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <View style={styles.publicationContainer}>
      <View style={styles.imageColumn}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imagePublicationTouchable}
            onPress={onPressFunction}
          >
            <Image
              source={imagePublication}
              style={styles.imagePublication}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
        {recommended && <Text style={styles.recommendedText}>Recomendada</Text>}
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: moderateScale(16),
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: moderateScale(14),
            marginBottom: moderateScale(5),
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
        <Text style={{ fontSize: moderateScale(30), fontWeight: 'bold' }}>
          ${price}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  publicationContainer: {
    width: '100%',
    //backgroundColor: 'yellow',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  imageColumn: {
    width: moderateScale(110),
    alignItems: 'center',
    //backgroundColor: 'aqua',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    elevation: 5,
    backgroundColor: 'white',
    position: 'relative',
  },
  imagePublicationTouchable: {
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  imagePublication: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
  },
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
  recommendedText: {
    //marginTop: moderateScale(5),
    textAlign: 'center',
    //width: '100%',
    fontSize: moderateScale(16),
    color: '#1A73E9',
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    //gap: moderateScale(10),
  },
})

export default PFilterCategoryComponent