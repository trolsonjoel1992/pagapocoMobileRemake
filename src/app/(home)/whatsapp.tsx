import ImagesPath from '@/src/constants/imagesPath';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Whatsaap = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Image
          source={ImagesPath.whatsapp}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Whatsaap;
