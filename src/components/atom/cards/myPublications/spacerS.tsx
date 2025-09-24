import { globalButtonHeightSp } from '@/src/constants/styles/globalStyles';
import React from 'react';
import { View } from 'react-native';

const SpacerS = () => {
  return (
    <View
      style={{ width: globalButtonHeightSp, height: globalButtonHeightSp }}
    ></View>
  );
};

export default SpacerS;
