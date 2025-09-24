import {
  globalBorderRadius,
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = { onPress?: () => void };

const SmallHButtonLDis = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.secondary,
        borderRadius: globalBorderRadius,
        width: moderateScale(210),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          letterSpacing: 0.5,
          color: colors.textInput,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
        }}
      >
        Volver a publicar
      </Text>
    </TouchableOpacity>
  );
};

export default SmallHButtonLDis;
