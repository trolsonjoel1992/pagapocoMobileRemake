import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalCardHeight,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
type CardPictureProps = {
  icon: keyof typeof IconsPath;
  title: string;
  onPress?: () => void;
};

const CardPictureP = ({ icon, title, onPress }: CardPictureProps) => {
  const { colors } = useTheme();
  const imageDimensions = moderateScale(54);
  const containerDimensions = moderateScale(80);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '85%',
        height: globalCardHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundBCI,
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeTitle,
          fontWeight: globalFontWeightBold,
          marginBottom: moderateScale(10),
        }}
      >
        {title}
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: globalBorderRadius,
          backgroundColor: colors.primary,
          width: containerDimensions,
          height: containerDimensions,
        }}
      >
        <Image
          source={IconsPath[icon]}
          style={{ width: imageDimensions, height: imageDimensions }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardPictureP;
