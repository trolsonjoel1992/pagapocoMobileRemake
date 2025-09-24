import {
  globalButtonHeightSp,
  globalButtonWidthSp,
} from '@/src/constants/styles/globalStyles';
import React from 'react';
import { View } from 'react-native';

const SpacerL = () => {
  return (
    <View
      style={{ width: globalButtonWidthSp, height: globalButtonHeightSp }}
    ></View>
  );
};

export default SpacerL;
