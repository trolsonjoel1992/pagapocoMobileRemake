import IconsCPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalFontSizeReg,
  globalFontWeightBold,
  globalIconsSma,
  globalInputWidth,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const ButtonGoogle = () => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => router.push('/(auth)/google')}
      style={{
        backgroundColor: colors.backgroundBCI,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        width: globalInputWidth,
        height: globalButtonHeight,
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
      }}
    >
      <Image
        source={IconsCPath.buttonGoogle}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
      <Text
        style={{
          color: colors.textInput,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
          elevation: globalButtonElevation,
        }}
      >
        Iniciar con Google
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;
