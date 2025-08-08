import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthEx,
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonDetails = () => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(10),
        width: globalButtonWidthEx,
        height: globalButtonHeight,
        backgroundColor: colors.backgroundBCI,
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: colors.textBlue,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
        }}
      >
        Detalles de la publicación
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonDetails;
