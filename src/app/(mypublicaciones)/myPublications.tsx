import SearchBarComponent from '@/src/components/atoms/SearchBarComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

interface Publication {
  id: number
  name: string
  image: any
  type: 'free' | 'prem'
}

const MyPublications = () => {
  const [soldPublications, setSoldPublications] = useState<number[]>([])
  const [hiddenPublications, setHiddenPublications] = useState<number[]>([])
  const [pausedPublications, setPausedPublications] = useState<number[]>([])

  const publications: Publication[] = [
    {
      id: 1,
      name: 'Nombre del producto',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 2,
      name: 'Nombre del producto',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 3,
      name: 'Nombre del producto',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 4,
      name: 'Nombre del producto',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
  ]
  const handleImagePress = (publicationId: number) => {
    console.log(`Imagen de la publicación ${publicationId} presionada`)
  }
  const toggleSoldStatus = (publicationId: number) => {
    if (soldPublications.includes(publicationId)) {
      setSoldPublications(soldPublications.filter((id) => id !== publicationId))
    } else {
      setSoldPublications([...soldPublications, publicationId])
    }
  }
  const togglePauseStatus = (publicationId: number) => {
    if (pausedPublications.includes(publicationId)) {
      setPausedPublications(
        pausedPublications.filter((id) => id !== publicationId)
      )
    } else {
      setPausedPublications([...pausedPublications, publicationId])
    }
  }
  const handleDelete = (publicationId: number) => {
    setHiddenPublications([...hiddenPublications, publicationId])
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBarComponent />
      <View style={styles.body}>
        {publications.map((publication) => {
          if (hiddenPublications.includes(publication.id)) {
            return null
          }
          const isPaused = pausedPublications.includes(publication.id)
          const isSold = soldPublications.includes(publication.id)
          return (
            <View
              key={publication.id}
              style={[
                styles.publicationContainer,
                isPaused && styles.pausedContainer,
              ]}
            >
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => handleImagePress(publication.id)}
              >
                <Image
                  source={publication.image}
                  style={styles.publicationImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <View style={styles.rightContainer}>
                <Text style={styles.publicationTitle}>{publication.name}</Text>

                <TouchableOpacity
                  style={[styles.actionButton, isSold && styles.soldButton]}
                  onPress={() => toggleSoldStatus(publication.id)}
                >
                  <Text
                    style={[
                      styles.actionButtonText,
                      isSold && styles.soldButtonText,
                    ]}
                  >
                    {isSold ? 'Publicar otro igual' : 'Marcar como vendido'}
                  </Text>
                </TouchableOpacity>
                <View style={styles.bottomSection}>
                  {isSold ? (
                    <Text style={styles.soldText}>Publicación vendida</Text>
                  ) : (
                    <View style={styles.buttonsRow}>
                      <View style={styles.iconContainer}>
                        {publication.type === 'free' && (
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
                        onPress={() => togglePauseStatus(publication.id)}
                      >
                        <Image
                          source={
                            isPaused ? IconsPath.iconPlay : IconsPath.iconPause
                          }
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleDelete(publication.id)}
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
              {isPaused && (
                <View style={styles.pausedOverlay}>
                  <View style={styles.overlayContent}>
                    <Text style={styles.pausedText}>Publicación pausada</Text>
                    <View style={styles.overlayButtonsContainer}>
                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => togglePauseStatus(publication.id)}
                      >
                        <Image
                          source={IconsPath.iconPlay}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleDelete(publication.id)}
                      >
                        <Image
                          source={IconsPath.iconDelete}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: moderateScale(16),
  },
  body: {
    width: '100%',
    paddingVertical: verticalScale(30),
  },
  publicationContainer: {
    width: '100%',
    height: moderateScale(120),
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(25),
    flexDirection: 'row',
    padding: moderateScale(12),
    overflow: 'hidden',
    position: 'relative',
  },
  pausedContainer: {
    opacity: 0.7,
  },
  imageContainer: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginRight: moderateScale(12),
  },
  publicationImage: {
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
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  soldButton: {
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
  },
  actionButtonText: {
    color: 'white',
    fontSize: moderateScale(18),
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
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  icon: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  soldText: {
    marginBottom: moderateScale(10),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#4C4C4C',
    textAlign: 'center',
  },
  pausedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pausedText: {
    marginTop: moderateScale(39),
    fontSize: moderateScale(24),
    marginLeft: moderateScale(110),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: moderateScale(10),
  },
  overlayButtonsContainer: {
    marginLeft: moderateScale(101),
    flexDirection: 'row',
    gap: 18,
    justifyContent: 'center',
    width: '100%',
  },
})
export default MyPublications
