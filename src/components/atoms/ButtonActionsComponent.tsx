import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const ButtonActionsComponent = ({ user }) => {
  return (
    <View style={styles.actionsContainer}>
      {!user && (
        <View style={styles.buttomLoginContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              router.push('/(auth)/FormLogin')
            }}
          >
            <Image
              source={ImagesPath.iconLogin}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.textActionsIcon,
                { color: '#1A73E9', fontWeight: 'bold' },
              ]}
            >
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.buttomLocationAndFilterContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/(ubication)/ubication')}
        >
          <Image
            source={ImagesPath.iconUbicaionFigma}
            style={styles.actionIcon}
            resizeMode="contain"
          />
          <Text style={styles.textActionsIcon}>Elige tu ciudad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/(filter)/filter')}
        >
          <Image
            source={ImagesPath.iconFiltroFigma}
            style={styles.actionIcon}
            resizeMode="contain"
          />
          <Text style={styles.textActionsIcon}>Filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    //backgroundColor: 'red',
    marginBottom: moderateScale(10),
    //height: moderateScale(90),
  },
  buttomLoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    //backgroundColor: 'green',
    height: moderateScale(40),
    marginBottom: moderateScale(5),
  },
  buttomLocationAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    //paddingHorizontal: moderateScale(10),
    //backgroundColor: 'yellow',
  },
  actionIcon: {
    padding: moderateScale(4),
    width: moderateScale(30),
    height: moderateScale(30),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    //backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(4),
  },
  textActionsIcon: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(5),
    color: '#555',
  },
})

export default ButtonActionsComponent
