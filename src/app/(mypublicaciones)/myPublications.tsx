import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import SearchBarComponent from '@/src/components/atoms/SearchBarComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import React, { useState } from 'react'
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

interface Product {
  id: number
  name: string
  image: any
  type: 'free' | 'prem'
}

const MyPublications = () => {
  const [soldProducts, setSoldProducts] = useState<number[]>([])
  const [hiddenProducts, setHiddenProducts] = useState<number[]>([])
  const [pausedProducts, setPausedProducts] = useState<number[]>([])

  const products: Product[] = [
    {
      id: 1,
      name: 'Nombre de la publicación',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 2,
      name: 'Nombre de la publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 3,
      name: 'Nombre de la publicación',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 4,
      name: 'Nombre de la publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
  ]

  const handleImagePress = (productId: number) => {
    console.log(`Imagen del producto ${productId} presionada`)
  }

  const toggleSoldStatus = (productId: number) => {
    if (soldProducts.includes(productId)) {
      setSoldProducts(soldProducts.filter((id) => id !== productId))
    } else {
      setSoldProducts([...soldProducts, productId])
    }
  }

  const togglePauseStatus = (productId: number) => {
    if (pausedProducts.includes(productId)) {
      setPausedProducts(pausedProducts.filter((id) => id !== productId))
    } else {
      setPausedProducts([...pausedProducts, productId])
    }
  }

  const handleDelete = (productId: number) => {
    setHiddenProducts([...hiddenProducts, productId])
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent titulo="Publicaciones" />
      <SearchBarComponent />

      <View style={styles.body}>
        {products.map((product) => {
          if (hiddenProducts.includes(product.id)) {
            return null
          }

          return (
            <Animated.View key={product.id} style={styles.publicationContainer}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => handleImagePress(product.id)}
              >
                <Image
                  source={product.image}
                  style={styles.productImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <View style={styles.rightContainer}>
                <Text style={styles.publicationTitle}>{product.name}</Text>

                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    soldProducts.includes(product.id) && styles.soldButton,
                  ]}
                  onPress={() => toggleSoldStatus(product.id)}
                >
                  <Text
                    style={[
                      styles.actionButtonText,
                      soldProducts.includes(product.id) &&
                        styles.soldButtonText,
                    ]}
                  >
                    {soldProducts.includes(product.id)
                      ? 'Publicar otro igual'
                      : 'Marcar como vendido'}
                  </Text>
                </TouchableOpacity>

                <View style={styles.bottomSection}>
                  {soldProducts.includes(product.id) ? (
                    <Text style={styles.soldText}>Publicación vendida</Text>
                  ) : (
                    <View style={styles.buttonsRow}>
                      <View style={styles.iconContainer}>
                        {product.type === 'free' && (
                          <TouchableOpacity style={styles.iconButton}>
                            <Image
                              source={IconsPath.iconStar}
                              style={styles.icon}
                            />
                          </TouchableOpacity>
                        )}
                      </View>

                      <TouchableOpacity style={styles.iconButton}>
                        <Image
                          source={IconsPath.iconEdit}
                          style={styles.icon}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => togglePauseStatus(product.id)}
                      >
                        <Image
                          source={
                            pausedProducts.includes(product.id)
                              ? IconsPath.iconPause
                              : IconsPath.iconPlay
                          }
                          style={styles.icon}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleDelete(product.id)}
                      >
                        <Image
                          source={IconsPath.iconDelete}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </Animated.View>
          )
        })}

        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  body: {
    width: '100%',
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(10),
  },
  publicationContainer: {
    width: '100%',
    height: moderateScale(120),
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(12),
    flexDirection: 'row',
    padding: moderateScale(12),
    overflow: 'hidden',
  },
  imageContainer: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginRight: moderateScale(12),
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  publicationTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#333',
    marginBottom: verticalScale(4),
  },
  actionButton: {
    height: moderateScale(32),
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  soldButton: {
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
  },
  actionButtonText: {
    color: 'white',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  soldButtonText: {
    color: '#4C4C4C',
  },
  bottomSection: {
    height: moderateScale(36),
    justifyContent: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: moderateScale(36),
    height: moderateScale(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: moderateScale(36),
    height: moderateScale(36),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: moderateScale(18),
  },
  icon: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  soldText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#4C4C4C',
    textAlign: 'center',
  },
  backButtonContainer: {
    width: moderateScale(150),
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  backButton: {
    backgroundColor: '#A230C7',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  pauseText: {
    fontSize: moderateScale(12),
    color: '#666',
    textAlign: 'center',
    marginTop: verticalScale(4),
  },
})

export default MyPublications
