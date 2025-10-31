import { globalButtonHeightSp } from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';

const SmallHSpaceS = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.backgroundBCI,
        width: globalButtonHeightSp,
        height: globalButtonHeightSp,
      }}
    ></View>
  );
};

export default SmallHSpaceS;
