import ImagesPath from '@/src/constants/ImagesPath'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

type CategoryProps = {
  iconCategory?: any
  title?: string
  onPressFunction?: () => void
}

const ButtonCategoryComponent = ({
  iconCategory = ImagesPath.iconCamionFigma,
  title = 'Camiones',
  onPressFunction,
}: CategoryProps) => {
  return (
    <View style={stylesButtomCategoryComponent.categoriaContainer}>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={onPressFunction}
      >
        <Image
          source={iconCategory}
          style={stylesButtomCategoryComponent.iconCategorias}
          resizeMode="contain"
        />

        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const stylesButtomCategoryComponent = StyleSheet.create({
  categoriaContainer: {
    //backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCategorias: {
    width: moderateScale(30),
    height: moderateScale(24),
  },
})

export default ButtonCategoryComponent
