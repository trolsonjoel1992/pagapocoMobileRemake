import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalBorderWidth,
  globalFontSizeReg,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  user: string;
  image?: any;
};

const CardProfile = ({ user, image }: Props) => {
  const imageDimensions = moderateScale(90);
  const { colors, theme } = useTheme();
  const imageMode =
    theme === 'dark' ? ImagesPath['darkUser'] : ImagesPath['user'];
  const imageSource = image ? image : imageMode;

  return (
    <View
      style={{
        backgroundColor: colors.backgroundBCI,
        borderRadius: globalBorderRadius,
        height: moderateScale(120),
        width: '85%',
        padding: moderateScale(20),
        borderColor: colors.textPrimary,
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
          color: colors.textPrimary,
          maxWidth: '60%',
        }}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {user}
      </Text>
    </View>
  );
};

export default CardProfile;
