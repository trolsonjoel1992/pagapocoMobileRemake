import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputsEditTCP from '@/src/components/molecule/myPublications/inputsEditTCP';
import ImagesPath from '@/src/constants/imagesPath';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageStyle, SafeAreaView, View, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const EditTitle = () => {
  const { colors } = useTheme();

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  const imageStyle: ImageStyle = {
    width: moderateScale(300),
    height: moderateScale(200),
    resizeMode: 'contain',
  };

  return (
    <SafeAreaView style={containerStyle}>
      <HeaderGeneric title='Editar Título y Precio' onBackPress={router.back} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={ImagesPath.sale} style={imageStyle} />
        <InputsEditTCP />
      </View>
    </SafeAreaView>
  );
};

export default EditTitle;
