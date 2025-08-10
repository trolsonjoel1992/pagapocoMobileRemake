import ImagesPath from '@/src/constants/imagesPath';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Google = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push('/(tabs)/home')}
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
