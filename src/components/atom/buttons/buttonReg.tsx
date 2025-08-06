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
type ButtonProps = {
  action: string;
  onPress?: () => void;
};
const ButtonReg = ({ action, onPress }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        borderRadius: globalBorderRadius,
        width: globalButtonWidthReg,
        height: globalButtonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: colors.textSecondary,
          fontWeight: globalFontWeightBold,
          fontSize: globalFontSizeReg,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonReg;
