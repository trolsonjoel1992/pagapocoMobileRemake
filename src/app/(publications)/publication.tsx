import ButtonActionsComponent from '@/src/components/atoms/ButtonActionsComponent'
import SearchBarMainComponent from '@/src/components/atoms/SearchBarMainComponent'
import { Color } from '@/src/constants/colors'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Publication = () => {
  //const { user, isLoading } = useAuth()
  const { publications, currentUser } = useApp()

  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  /* const carouselImages = [
    { id: '1', image: ImagesPath.imageAutoVolkswagenPolo },
    { id: '2', image: ImagesPath.imageAutoFiatToro },
    { id: '3', image: ImagesPath.imageAutoJeepRenegade },
    { id: '4', image: ImagesPath.imageAutoRenaultSandero },
    { id: '5', image: ImagesPath.imageDefault2 },
    { id: '6', image: ImagesPath.imageDefault2 },
  ] */

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

  const { width } = Dimensions.get('window')

  const [expanded, setExpanded] = useState(false)

  //const { publicationId } = useLocalSearchParams()

  const { publication: publicationString } = useLocalSearchParams()
  const publication = JSON.parse((publicationString as string) || '{}')

  const carouselImages =
    publication.images?.length > 0
      ? publication.images.map((img: any, index: number) => ({
          id: index.toString(),
          image: img,
        }))
      : [{ id: '1', image: ImagesPath.imageDefault2 }]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <SearchBarMainComponent
            showBackButton
            onBackPress={() => router.push('/(tabs)/home')}
          />
        </View>

        <View style={styles.actionsContainer}>
          <ButtonActionsComponent user={currentUser} />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.publicationContainer}>
          {publication.isPremium && (
            <Text style={styles.recommendedText}>Recomendada</Text>
          )}
          <Text style={styles.publicationInfo}>
            2025 | 0.000 km - Publicado hace 2 meses
          </Text>
          <Text
            style={styles.publicationTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {publication.title}
          </Text>

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

          <View style={styles.labelPublicationContainer}>
            <Text style={styles.priceText}>{publication.price}</Text>
            <Text
              style={styles.descriptionTitle}
              numberOfLines={expanded ? undefined : 3}
              ellipsizeMode="tail"
            >
              {publication.description}
            </Text>
            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              style={styles.seeMoreButton}
            >
              <Text style={styles.seeMoreText}>
                {expanded ? 'Ver menos' : 'Ver más...'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttomDetallesContainer}>
            <TouchableOpacity
              style={styles.buttomDetalles}
              onPress={() => router.push('/(publications)/publicationDetails')}
            >
              <Text style={styles.buttomDetallesText}>Más Detalles</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttomContactContainer}>
            <TouchableOpacity style={styles.buttomContact}>
              <Text style={styles.buttomContactText}>Preguntar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttomContact}>
              <Text style={styles.buttomContactText}>Whatshapp</Text>
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
    //height: moderateScale(200),
    width: '100%',
    //backgroundColor: 'aqua',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(40),
    //gap: moderateScale(5),
    marginTop: moderateScale(10),
    marginBottom: verticalScale(5),
  },
  actionIcon: {
    padding: moderateScale(4),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(4),
  },
  textActionsIcon: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8),
    color: '#555',
  },
  scrollContainer: {
    flex: 1,
  },
  publicationContainer: {
    //marginTop: moderateScale(15),
    //marginBottom: moderateScale(20),
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
    //fontWeight: '500',
    //marginTop: moderateScale(8),
    //color: '#5b5f66',
  },
  descriptionText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
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
  recommendedText: {
    //marginTop: moderateScale(5),
    //textAlign: '',
    //width: '100%',
    fontSize: moderateScale(16),
    color: '#1A73E9',
    fontWeight: 'bold',
  },
})

export default Publication
