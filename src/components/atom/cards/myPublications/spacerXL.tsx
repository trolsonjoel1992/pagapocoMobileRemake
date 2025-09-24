import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const SpacerXL = () => {
  return (
    <View
      style={{ width: moderateScale(120), height: moderateScale(120) }}
    ></View>
  );
};

export default SpacerXL;
