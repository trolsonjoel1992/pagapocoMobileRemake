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
  user?: {
    username?: string;
    profileImage?: string;
  };
};

const CardProfile = ({ user }: Props) => {
  const imageDimensions = moderateScale(90);
  const { colors, theme } = useTheme();
  const defaultImage = theme === 'dark' ? ImagesPath.darkUser : ImagesPath.user;

  const imageSource = user?.profileImage
    ? { uri: user.profileImage }
    : defaultImage;

  const displayName = user?.username || 'Sin nombre de usuario';

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
        justifyContent: 'flex-start',
      }}
    >
      <View
        style={{
          width: imageDimensions,
          height: imageDimensions,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: moderateScale(30),
        }}
      >
        <Image
          source={imageSource}
          style={{
            width: imageDimensions,
            height: imageDimensions,
            borderRadius: imageDimensions / 2,
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
        {displayName}
      </Text>
    </View>
  );
};

export default CardProfile;
