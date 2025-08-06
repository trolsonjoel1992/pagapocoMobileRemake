import { lightColor } from '@/src/constants/colors';
import {
  globalBorderRadius,
  globalBorderWidth,
  globalFontSizeReg,
  globalFontWeightSemiBold,
} from '@/src/constants/globalStyles';
import ImagesPath from '@/src/constants/imagesPath';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
type Props = {
  username: string;
  imageSource?: any; // Tipar mejor cuando sepa el tipo exacto
};

const CardProfile = ({ username, imageSource }: Props) => {
  const imageDimensions = moderateScale(90);
  return (
    <View
      style={{
        backgroundColor: lightColor.backgroundBCI,
        borderRadius: globalBorderRadius,
        height: moderateScale(120),
        width: '85%',
        padding: moderateScale(20),
        borderColor: lightColor.textPrimary,
        borderWidth: globalBorderWidth,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: imageDimensions,
          height: imageDimensions,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 'auto',
        }}
      >
        <Image
          source={imageSource ? imageSource : ImagesPath.user}
          style={{
            width: imageDimensions,
            height: imageDimensions,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightSemiBold,
          color: lightColor.textPrimary,
          maxWidth: '60%',
        }}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {username}
      </Text>
    </View>
  );
};

export default CardProfile;
