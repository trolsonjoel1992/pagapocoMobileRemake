import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';

const RegHButton = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        borderRadius: globalBorderRadius,
        backgroundColor: colors.backgroundBCI,
        marginTop: globalButtonElevation + 3,
        width: globalButtonHeight,
        height: globalButtonHeight,
      }}
    ></View>
  );
};

export default RegHButton;
