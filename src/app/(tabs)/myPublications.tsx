import SearchBarComponent from '@/src/components/atoms/SearchBarComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

interface Publication {
  id: number
  name: string
  image: any
  type: 'free' | 'prem'
}

export default function MyPublications() {
  const [showPublications, setShowPublications] = useState(false)

  const [soldPublications, setSoldPublications] = useState<number[]>([])
  const [hiddenPublications, setHiddenPublications] = useState<number[]>([])
  const [pausedPublications, setPausedPublications] = useState<number[]>([])

  const publications: Publication[] = [
    {
      id: 1,
      name: 'Nombre publicación',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 2,
      name: 'Nombre publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 3,
      name: 'Nombre publicación',
      image: ImagesPath.imageMyPublication,
      type: 'prem',
    },
    {
      id: 4,
      name: 'Nombre publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 5,
      name: 'Nombre publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 6,
      name: 'Nombre publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
    {
      id: 7,
      name: 'Nombre publicación',
      image: ImagesPath.imageFrePublication,
      type: 'free',
    },
  ]
  const handleImagePress = (publicationId: number) => {
    router.push('/(mypublications)/myPublication')
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
      {/* Barra de búsqueda */}

      <View style={{ paddingHorizontal: moderateScale(16) }}>
        <SearchBarComponent />
      </View>

      {showPublications ? (
        <>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View>
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
                      <Text style={styles.publicationTitle}>
                        {publication.name}
                      </Text>

                      <TouchableOpacity
                        style={[
                          styles.actionButton,
                          isSold && styles.soldButton,
                        ]}
                        onPress={() => toggleSoldStatus(publication.id)}
                      >
                        <Text
                          style={[
                            styles.actionButtonText,
                            isSold && styles.soldButtonText,
                          ]}
                        >
                          {isSold
                            ? 'Publicar otro igual'
                            : 'Marcar como vendido'}
                        </Text>
                      </TouchableOpacity>
                      <View style={styles.bottomSection}>
                        {isSold ? (
                          <Text style={styles.soldText}>
                            Publicación vendida
                          </Text>
                        ) : (
                          <View style={styles.buttonsRow}>
                            <View style={styles.iconContainer}>
                              {publication.type === 'free' && (
                                <TouchableOpacity
                                  style={styles.iconButton}
                                  onPress={() =>
                                    router.push('/(mypublications)/premium')
                                  }
                                >
                                  <Image
                                    source={IconsPath.iconStar}
                                    style={styles.icon}
                                  />
                                </TouchableOpacity>
                              )}
                            </View>
                            <TouchableOpacity
                              style={styles.iconButton}
                              onPress={() =>
                                router.push('/(mypublications)/edit')
                              }
                            >
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
                                  isPaused
                                    ? IconsPath.iconPlay
                                    : IconsPath.iconPause
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
                          <Text style={styles.pausedText}>
                            Publicación pausada
                          </Text>
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
          </ScrollView>
        </>
      ) : (
        <View style={stylesEmpty.emptyContainer}>
          <Image
            source={ImagesPath.imageNopublication}
            style={stylesEmpty.emptyImage}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => setShowPublications(true)}>
            <Text style={stylesEmpty.emptyTitle}>¡No hay publicaciones!</Text>
          </TouchableOpacity>
          <Text style={stylesEmpty.emptyText}>
            Podés crear una y empezar a vender cuando quieras.
          </Text>

          {/* Botón "Publicar ahora" */}
          <TouchableOpacity
            style={stylesEmpty.publishButton}
            onPress={() => router.push('/(tabs)/sell')}
          >
            <Text style={stylesEmpty.publishButtonText}>Publicar ahora</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

const stylesEmpty = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: moderateScale(0),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    marginTop: verticalScale(20),
  },
  scrollContent: {
    paddingHorizontal: moderateScale(16),
  },
  publicationContainer: {
    width: '100%',
    height: moderateScale(120),
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(25),
    flexDirection: 'row',
    padding: moderateScale(12),
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    backgroundColor: '#fff',
    width: moderateScale(120),
    height: moderateScale(100),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginRight: moderateScale(7),
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
    height: moderateScale(35),
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(5),
  },
  actionButtonText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  soldButton: {
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
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
  pausedContainer: {
    opacity: 1,
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
    marginTop: moderateScale(20),
    fontSize: moderateScale(28),
    marginLeft: moderateScale(10),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: moderateScale(20),
  },
  overlayButtonsContainer: {
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(103),
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    width: '100%',
  },
})
