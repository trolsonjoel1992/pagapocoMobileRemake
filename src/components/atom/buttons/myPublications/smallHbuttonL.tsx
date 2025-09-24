import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeightSp,
  globalButtonWidthSp,
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = { onPress?: () => void };

const SmallHButtonL = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        backgroundColor: colors.primary,
        height: globalButtonHeightSp,
        width: globalButtonWidthSp,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: colors.textSecondary,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
        }}
      >
        ¿Ya lo vendiste?
      </Text>
    </TouchableOpacity>
  );
};

export default SmallHButtonL;
