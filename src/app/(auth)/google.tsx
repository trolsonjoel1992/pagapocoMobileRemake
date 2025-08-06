import ImagesPath from '@/src/constants/imagesPath';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Google = () => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        source={ImagesPath.google}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
};

export default Google;
