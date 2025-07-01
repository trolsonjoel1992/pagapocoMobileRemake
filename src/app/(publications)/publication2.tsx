import ButtonActionsComponent from '@/src/components/atoms/ButtonActionsComponent'
import SearchBarMainComponent from '@/src/components/atoms/SearchBarMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { useAuth } from '@/src/hooks/useAuth'
import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Publication2 = () => {
  const { user } = useAuth()

  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  // lista de imagenes del carrusel
  const carouselImages = [
    { id: '1', image: ImagesPath.imageCamionetaS10 },
    { id: '2', image: ImagesPath.imageCamionetaS10 },
    { id: '3', image: ImagesPath.imageCamionetaS10 },
  ]

  // maneja el cambio de índice del carrusel
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0)
      }
    }
  ).current

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const [expanded, setExpanded] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      {/* barra superior con buscador e iconos de accion */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <SearchBarMainComponent
            showBackButton
            onBackPress={() => router.push('/(tabs)/home')}
          />
        </View>

        <View style={styles.actionsContainer}>
          <ButtonActionsComponent user={user} />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* info principal de la publicacion */}
        <View style={styles.publicationContainer}>
          <Text style={styles.publicationInfo}>
            2024 | 55.000 km - Publicado hace 3 semanas
          </Text>
          <Text style={styles.publicationTitle}>S10 Chevrolet LS</Text>

          {/* carrusel de imagenes */}
          <View style={styles.imageContainer}>
            <FlatList
              ref={flatListRef}
              data={carouselImages}
              renderItem={({ item }) => (
                <View style={styles.slide}>
                  <Image source={item.image} style={styles.image} />
                </View>
              )}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
            />
            <View style={styles.pagination}>
              {carouselImages.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentIndex && styles.paginationDotActive,
                  ]}
                />
              ))}
            </View>
          </View>

          {/* descripcion y precio */}
          <View style={styles.labelPublicationContainer}>
            <Text style={styles.priceText}>$ 20.000.000</Text>
            <Text
              style={styles.descriptionTitle}
              numberOfLines={expanded ? undefined : 3}
              ellipsizeMode="tail"
            >
              excelente estado recibo permutas financio.
            </Text>
            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              style={styles.seeMoreButton}
            >
              <Text style={styles.seeMoreText}>
                {expanded ? 'ver menos' : 'ver más...'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* botones de accion */}
        <View style={styles.footer}>
          <View style={styles.buttomDetallesContainer}>
            <TouchableOpacity
              style={styles.buttomDetalles}
              onPress={() => router.push({ pathname: '/PublicationDetails' })}
            >
              <Text style={styles.buttomDetallesText}>más detalles</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttomContactContainer}>
            <TouchableOpacity style={styles.buttomContact}>
              <Text style={styles.buttomContactText}>preguntar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttomContact}>
              <Text style={styles.buttomContactText}>whatsapp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    paddingVertical: verticalScale(10),
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(40),
    gap: moderateScale(4),
    marginBottom: verticalScale(16),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
  },
  scrollContainer: {
    flex: 1,
  },
  publicationContainer: {
    paddingHorizontal: moderateScale(15),
  },
  publicationInfo: {
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  publicationTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
  },
  imageContainer: {
    width: '100%',
    height: moderateScale(270),
    marginVertical: moderateScale(10),
    position: 'relative',
  },
  slide: {
    width: Dimensions.get('window').width - moderateScale(30),
    height: moderateScale(265),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: '#ECE6F0',
    marginHorizontal: moderateScale(5),
  },
  paginationDotActive: {
    backgroundColor: '#A230C7',
    width: moderateScale(10),
  },
  labelPublicationContainer: {
    width: '100%',
    marginTop: moderateScale(10),
  },
  priceText: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  descriptionTitle: {
    fontSize: moderateScale(20),
  },
  footer: {
    width: '100%',
    paddingBottom: verticalScale(20),
    paddingHorizontal: moderateScale(15),
  },
  buttomDetallesContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    marginTop: moderateScale(10),
  },
  buttomDetalles: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomDetallesText: {
    color: '#1A73E9',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  buttomContactContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    marginTop: moderateScale(10),
  },
  buttomContact: {
    backgroundColor: '#A230C7',
    flex: 1,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomContactText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  seeMoreButton: {
    marginTop: moderateScale(8),
    alignSelf: 'flex-start',
  },
  seeMoreText: {
    color: '#1A73E9',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
})

export default Publication2
