import ImagesPath from '@/src/constants/imagesPath';
import { globalIconsLar } from '@/src/constants/styles/globalStyles';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonFinger = () => {
  return (
    <TouchableOpacity>
      <Image
        source={ImagesPath.finger}
        style={{
          width: globalIconsLar,
          height: globalIconsLar,
          marginTop: moderateScale(20),
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonFinger;
