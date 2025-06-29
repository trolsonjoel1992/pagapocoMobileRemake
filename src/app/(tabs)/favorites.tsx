import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { Publication, useApp } from '@/src/contexts/AppContext'
import { useEffect, useState } from 'react'
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

// interface Publication {
//   id: number
//   name: string
//   image: any
//   type: 'free' | 'prem'
// }

export default function Favorites() {
  // const [showFavorites, setShowFavorites] = useState(false)

  // const publications: Publication[] = [
  //   {
  //     id: 1,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageMyPublication,
  //     type: 'prem',
  //   },
  //   {
  //     id: 2,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageFrePublication,
  //     type: 'free',
  //   },
  //   {
  //     id: 3,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageMyPublication,
  //     type: 'prem',
  //   },
  //   {
  //     id: 4,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageFrePublication,
  //     type: 'free',
  //   },
  //   {
  //     id: 5,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageFrePublication,
  //     type: 'free',
  //   },
  //   {
  //     id: 6,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageFrePublication,
  //     type: 'free',
  //   },
  //   {
  //     id: 7,
  //     name: 'Nombre publicación',
  //     image: ImagesPath.imageFrePublication,
  //     type: 'free',
  //   },
  // ]

  const { currentUser, getUserFavorites, favorites } = useApp()
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const fetchPublications = async () => {
      if (currentUser) {
        const userPublications = await getUserFavorites(currentUser.id)
        setPublications(userPublications)
      }
    }

    fetchPublications()
  }, [favorites])

  return publications.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {publications.map((publication) => {
            return (
              <View key={publication.id} style={[styles.publicationContainer]}>
                <View style={styles.rowContainer}>
                  <TouchableOpacity
                    style={styles.imageContainer}
                    //onPress={() => handleImagePress(publication.id)}
                  >
                    <Image
                      source={publication.images[0]}
                      style={styles.publicationImage}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                  <View style={styles.rightContainer}>
                    <Text style={styles.publicationTitle}>
                      {publication.title}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: moderateScale(16),
                        fontWeight: 'bold',
                      }}
                    >
                      AAA...
                    </Text> */}
                    <Text
                      style={{
                        fontSize: moderateScale(20),
                        fontWeight: 'bold',
                      }}
                    >
                      {publication.price}{' '}
                    </Text>
                  </View>
                </View>
                <View style={styles.rowContainer}>
                  <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Preguntar</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                      <Image source={IconsPath.wappIcon} />
                      <Text style={styles.buttonText}>WhatsApp</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={stylesEmpty.container}>
      <View style={stylesEmpty.emptyContainer}>
        <Image
          source={ImagesPath.noFavorites}
          style={stylesEmpty.emptyImage}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <Text style={stylesEmpty.emptyTitle}>
            ¡Todavia no tenes publicaciones favoritas!
          </Text>
        </TouchableOpacity>
        <Text style={stylesEmpty.emptyText}>
          Agregalas cliqueando en el corazón de la publicación
        </Text>

        <TouchableOpacity
          style={stylesEmpty.publishButton}
          //onPress={() => router.push()}
        >
          <Text style={stylesEmpty.publishButtonText}>
            Nuestros recomendados
          </Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scroll: {
    paddingTop: verticalScale(20),
  },
  scrollContent: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: verticalScale(20),
  },
  publicationContainer: {
    width: '100%',
    height: moderateScale(180),
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(15),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    backgroundColor: '#fff',
    width: moderateScale(135),
    borderRadius: moderateScale(20),
    height: moderateScale(105),
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(15),
    marginRight: moderateScale(25),
  },
  publicationImage: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
  },
  publicationTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
  },
  actionButton: {
    height: moderateScale(32),

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    width: moderateScale(170),
    height: moderateScale(55),
    margin: moderateScale(3),
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
})
