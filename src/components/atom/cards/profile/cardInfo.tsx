import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontSizeReg,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type Props = {
  image?: keyof typeof ImagesPath;
  user: string;
  email: string;
};

const CardInfo = ({ image, user, email }: Props) => {
  const imageDimensions = moderateScale(75);
  const { colors, theme } = useTheme();
  const imageMode =
    theme === 'dark' ? ImagesPath['darkUser'] : ImagesPath['user'];
  const imageSource = image ? ImagesPath[image] : imageMode;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: verticalScale(85),
        padding: moderateScale(10),
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
      }}
    >
      <Image
        source={imageSource}
        style={{ width: imageDimensions, height: imageDimensions }}
      />
      <View style={{ gap: moderateScale(5) }}>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightSemiBold,
          }}
        >
          {user}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: globalFontSizeMid,
            fontWeight: globalFontWeightSemiBold,
          }}
        >
          {email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardInfo;
