import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeReg,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalFontWeightMedium,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const EmptyPublication = () => {
  const { colors, theme } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={
          theme === 'dark' ? ImagesPath.emptyPbtionD : ImagesPath.emptyPbtion
        }
        style={{
          width: moderateScale(250),
          height: moderateScale(250),
          marginBottom: verticalScale(20),
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: globalFontSizeTitle,
          marginBottom: verticalScale(10),
          fontWeight: globalFontWeightBold,
          color: colors.textPrimary,
        }}
      >
        ¡No hay publicaciones!
      </Text>
      <Text
        style={{
          marginBottom: verticalScale(20),
          fontSize: globalFontSizeReg,
          textAlign: 'center',
          color: colors.textPrimary,
        }}
      >
        Podes crear una y empezar a vender cuando quieras
      </Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)/sell')}>
        <Text
          style={{
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightMedium,
            textAlign: 'center',
            color: colors.textBlue,
          }}
        >
          Publicá ahora
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyPublication;
