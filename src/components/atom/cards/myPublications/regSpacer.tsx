import {
  globalBorderRadius,
  globalButtonHeight,
} from '@/src/constants/styles/globalStyles';
import React from 'react';
import { View } from 'react-native';

const RegSpacer = () => {
  return (
    <View
      style={{
        borderRadius: globalBorderRadius,
        width: globalButtonHeight,
        height: globalButtonHeight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    ></View>
  );
};

export default RegSpacer;
