import ImagesPath from '@/src/constants/imagesPath';
import { globalCardMyPlctnsImage } from '@/src/constants/styles/globalStyles';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  image: string | null;
  onPress?: () => void;
};
const Imagebutton = ({ image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={image ? { uri: image } : ImagesPath.emptyPbtion}
        style={{
          borderRadius: moderateScale(20),
          width: globalCardMyPlctnsImage,
          height: globalCardMyPlctnsImage,
        }}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
};

export default Imagebutton;
