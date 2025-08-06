import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthLar,
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
const ButtonMaxDis = ({ action, onPress }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.secondary,
        borderRadius: globalBorderRadius,
        width: globalButtonWidthLar,
        height: globalButtonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: colors.textInput,
          fontWeight: globalFontWeightBold,
          fontSize: globalFontSizeReg,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonMaxDis;
