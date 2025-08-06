import ImagesPath from '@/src/constants/imagesPath';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonFinger = () => {
  return (
    <TouchableOpacity>
      <Image
        source={ImagesPath.finger}
        style={{
          width: moderateScale(60),
          height: moderateScale(60),
          marginTop: moderateScale(20),
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonFinger;
