import IconsPath from '@/src/constants/IconsPath'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CardPublications = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.imageConteiner}>
          {/* <Image source={require('path/to/your/image')} /> */}
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Nombre publicación</Text>
          <TouchableOpacity style={styles.buttonSold}>
            <Text style={styles.buttonText}>Marcar como vendido</Text>
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconDelete} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconPause} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconEdit} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconStar} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.imageConteiner}>
          {/* <Image source={require('path/to/your/image')} /> */}
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Nombre publicación</Text>
          <TouchableOpacity style={styles.buttonSold}>
            <Text style={styles.buttonText}>Marcar como vendido</Text>
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconDelete} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconPause} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconEdit} />
            </TouchableOpacity>
            <View style={styles.iconOverlay}></View>
          </View>
        </View>
      </View>
      <View style={styles.cardOverlay}>
        <View style={styles.imageOverlay}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Publicación pausada</Text>
          <View style={styles.buttonSold}>
            <Text style={styles.buttonText}>Publicación pausada</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconDelete} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={IconsPath.nIconPlay} />
            </TouchableOpacity>
            <View style={styles.iconOverlay}></View>
            <View style={styles.iconOverlay}></View>
          </View>
        </View>
      </View>
    </View>
  )
}
//hay que agregar funcion en la api para borrar la publicacion
//hay que agregar funcion en la api para marcar como vendido

export default CardPublications

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '95%',
    height: moderateScale(150),
    flexDirection: 'row',
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
  },
  imageConteiner: {
    backgroundColor: '#fff',
    width: moderateScale(120),
    height: moderateScale(95),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    height: moderateScale(130),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  buttonSold: {
    backgroundColor: '#A230C7',
    width: '100%',
    height: moderateScale(35),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(18),
    backgroundColor: '#a230c7',
    width: moderateScale(40),
    height: moderateScale(40),
    padding: moderateScale(5),
    zIndex: 1, // Se coloca encima de la superposición
  },
  cardOverlay: {
    alignItems: 'center',
    width: '95%',
    height: moderateScale(150),
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  imageOverlay: {
    backgroundColor: '#fff',
    opacity: 0.5,
    width: moderateScale(120),
    height: moderateScale(95),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  iconOverlay: {
    width: moderateScale(40),
    height: moderateScale(40),
    padding: moderateScale(5),
    opacity: 0,
  },
})
