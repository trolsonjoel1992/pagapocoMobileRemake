import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type CategoryButtonProps = {
  iconSource: keyof typeof ImagesPath;
  label: string;
  onPress?: () => void;
};

const CategoryRegButton = ({
  iconSource,
  label,
  onPress,
}: CategoryButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        backgroundColor: colors.backgroundBCI,
        width: '90%',
        padding: moderateScale(15),
        borderRadius: globalBorderRadius,
      }}
    >
      <Image
        source={ImagesPath[iconSource]}
        style={{
          width: moderateScale(100),
          height: moderateScale(100),
        }}
      />
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightSemiBold,
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryRegButton;
