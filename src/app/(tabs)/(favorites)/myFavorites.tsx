import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
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

const MyPublications = () => {
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
  ]
  /* const handleImagePress = (publicationId: number) => {
    router.push('/(mypublicaciones)/myPublication')
  }
 */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          {publications.map((publication) => {
            return (
              <View key={publication.id} style={[styles.publicationContainer]}>
                <View style={styles.rowContainer}>
                  <TouchableOpacity
                    style={styles.imageContainer}
                    //onPress={() => handleImagePress(publication.id)}
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
                    <Text
                      style={{
                        fontSize: moderateScale(16),
                        fontWeight: 'bold',
                      }}
                    >
                      AAA...
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(20),
                        fontWeight: 'bold',
                      }}
                    >
                      $000.000
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  body: {
    width: '100%',
    paddingVertical: verticalScale(20),
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
export default MyPublications
