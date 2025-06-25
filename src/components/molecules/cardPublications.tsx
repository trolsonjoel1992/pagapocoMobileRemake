import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const cardPublications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image></Image>
        </View>
        <View>
          <Text>Nombre publicación</Text>
          <TouchableOpacity style={styles.buttonSold}>
            <Text>Marcar como vendido</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default cardPublications
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: moderateScale(16),
  },
  imageConteiner: {
    width: moderateScale(110),
    height: moderateScale(95),
    borderRadius: moderateScale(20),

    paddingVertical: verticalScale(30),
  },
  buttonSold: {
    backgroundColor: '#A230C7',
    width: moderateScale(100),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
  },
})
