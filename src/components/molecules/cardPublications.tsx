import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const CardPublications = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.imageConteiner}>
          <Image />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Nombre publicación</Text>
          <TouchableOpacity style={styles.buttonSold}>
            <Text style={styles.buttonText}>Marcar como vendido</Text>
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Text>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text>❤️</Text>
            </TouchableOpacity>
            <View style={styles.ocultedIcon}>
              <Text>↗️</Text>
            </View>
            <View style={styles.ocultedIcon}>
              <Text>↗️</Text>
            </View>
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(10),
  },
  imageConteiner: {
    width: moderateScale(110),
    height: moderateScale(95),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  buttonSold: {
    backgroundColor: '#A230C7',
    width: moderateScale(130),
    height: moderateScale(35),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(10),
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '60%',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: '#a230c7',
    width: moderateScale(30),
    height: moderateScale(30),
    padding: moderateScale(5),
  },
  ocultedIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    padding: moderateScale(5),
    opacity: 0,
  },
})
