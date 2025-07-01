import ImagesPath from '@/src/constants/ImagesPath'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

type HeaderProps = {
  titulo: string
  onBackPress?: () => void // Prop opcional
}

const HeaderMainComponent = ({ titulo, onBackPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      {/* si se pasa onBackPress, se muestra el boton de retroceso */}
      {onBackPress ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.6}
        >
          <Image
            source={ImagesPath.imageArrowBack}
            style={styles.logoArrowBackStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}

      <Text style={styles.textCuenta}>{titulo}</Text>

      <View style={styles.invisibleSpacer} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#A230C7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  backButton: {
    padding: moderateScale(10),
  },
  backButtonPlaceholder: {
    width: moderateScale(44), // mismo ancho que el boton de retroceso
  },
  logoArrowBackStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  textCuenta: {
    color: 'black',
    fontSize: moderateScale(18),
    fontWeight: 'normal',
  },
  invisibleSpacer: {
    width: moderateScale(44),
  },
})

export default HeaderMainComponent
