import GenericModal from '@/src/components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native'

import { moderateScale, verticalScale } from 'react-native-size-matters'

const Publication1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSold, setIsSold] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const flatListRef = useRef<FlatList>(null)
  const images = [
    ImagesPath.publImageF,
    ImagesPath.publImageF,
    ImagesPath.publImageF,
    ImagesPath.publImageF,
  ]

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

  const handleSoldButtonPress = () => {
    setIsSold(!isSold)
  }

  const handlePauseButtonPress = () => {
    setIsPaused(!isPaused)
  }

  const handleDeletePress = () => {
    setShowDeleteModal(true)
  }

  const handleDeleteContinue = () => {
    setShowDeleteModal(false)
    // Aquí puedes agregar la lógica para eliminar la publicación
    // Por ejemplo: router.push('/(tabs)/(myPublications)/myPublications')
  }

  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <HeaderMainComponent
        titulo="Tu publicación"
        onBackPress={() =>
          router.push('/(tabs)/(myPublications)/myPublications')
        }
      />

      <View style={styles.publicationContainer}>
        <View style={styles.labelPublicationContainer}>
          <Text style={{ fontSize: moderateScale(16), fontWeight: '400' }}>
            2025 | 0.000 km - Publicado hace meses
          </Text>
          <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold' }}>
            Nombre publicación
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <FlatList
            ref={flatListRef}
            data={images}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item} style={styles.image} />
              </View>
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />

          <View style={styles.pagination}>
            {images.map((_, index) => (
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
          <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold' }}>
            $ 000.000
          </Text>
          <Text style={{ fontSize: moderateScale(20), fontWeight: '500' }}>
            Descripcion
          </Text>
          <Text style={{ fontSize: moderateScale(16), fontWeight: '400' }}>
            Una descripción agregada.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttomContainer}>
          <TouchableOpacity
            style={[
              styles.buttomSold,
              isSold ? styles.buttomSoldDisabled : null,
            ]}
            onPress={handleSoldButtonPress}
          >
            <Text
              style={[
                styles.buttonText,
                isSold ? styles.buttonTextDisabled : null,
              ]}
            >
              {isSold ? 'publicar otro igual' : 'Marcar como vendido'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          {!isSold ? (
            <>
              <TouchableOpacity
                onPress={() => router.push('/(mypublicaciones)/premium')}
              >
                <Image source={IconsPath.iconStar} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push('/(mypublicaciones)/edit')}
              >
                <Image source={IconsPath.iconEdit} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePauseButtonPress}>
                <Image source={IconsPath.iconPause} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeletePress}>
                <Image source={IconsPath.iconDelete} style={styles.icon} />
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.hiddenIconsPlaceholder} />
          )}
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/(myPublications)/myPublications')}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>

      {/* Modal/Overlay para publicación pausada */}
      <Modal
        visible={isPaused}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsPaused(false)}
      >
        <View style={[styles.overlay, { width, height }]}>
          <Text style={styles.pausedText}>Publicación{'\n'}pausada</Text>
          <View style={styles.iconsOverlayContainer}>
            <TouchableOpacity onPress={handlePauseButtonPress}>
              <Image source={IconsPath.iconPlay} style={styles.iconOverlay} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeletePress}>
              <Image source={IconsPath.iconDelete} style={styles.iconOverlay} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonOverlay}
            onPress={() =>
              router.push('/(tabs)/(myPublications)/myPublications')
            }
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* GenericModal para confirmar eliminación */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.overlay}>
          <GenericModal
            imageSource={ImagesPath.modalAlert}
            messages={[
              '¿Estás seguro que deseas ',
              'eliminar esta publicación?',
            ]}
            showCancelButton={true}
            onCancel={() => setShowDeleteModal(false)}
            onContinue={handleDeleteContinue}
            continueButtonText="Eliminar"
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  publicationContainer: {
    marginTop: moderateScale(40),
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },
  labelPublicationContainer: {
    width: '100%',
    textAlign: 'left',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
  },
  imageContainer: {
    width: moderateScale(360),
    height: moderateScale(270),
    marginVertical: moderateScale(15),
    position: 'relative',
  },
  slide: {
    width: moderateScale(360),
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
    bottom: 5,
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
  icon: {
    width: moderateScale(55),
    height: moderateScale(55),
    marginHorizontal: moderateScale(4),
  },
  footer: {
    height: moderateScale(120),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  buttomContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#4C4C4C',
  },
  buttomSold: {
    backgroundColor: '#A230C7',
    width: moderateScale(295),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomSoldDisabled: {
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
  },
  iconsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    height: moderateScale(55),
  },
  hiddenIconsPlaceholder: {
    width: moderateScale(55 * 4 + 20 * 3),
    height: moderateScale(55),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(170),
    height: moderateScale(55),
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(20),
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pausedText: {
    textAlign: 'center',
    color: 'white',
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    marginTop: moderateScale(200),
  },
  iconsOverlayContainer: {
    flexDirection: 'row',
    gap: moderateScale(27),
    position: 'absolute',
    bottom: moderateScale(104),
    right: moderateScale(37),
  },
  iconOverlay: {
    width: moderateScale(55),
    height: moderateScale(55),
  },
  buttonOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(170),
    height: moderateScale(55),
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(382),
  },
})

export default Publication1
