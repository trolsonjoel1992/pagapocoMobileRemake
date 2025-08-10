import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthReg,
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ButtonCancelProps = {
  onPress?: () => void;
};

const ButtonCancel = ({ onPress }: ButtonCancelProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.backgroundBCI,
        width: globalButtonWidthReg,
        height: globalButtonHeight,
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(10),
      }}
    >
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
        }}
      >
        Cancelar
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCancel;
